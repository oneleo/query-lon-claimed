import {
  BigInt,
  ByteArray,
  Bytes,
  ethereum,
  log
} from "@graphprotocol/graph-ts"
import {
  Claimed as ClaimedEvent,
  OwnerChanged as OwnerChangedEvent,
  OwnerNominated as OwnerNominatedEvent
} from "../generated/MerkleRedeem/MerkleRedeem"
import {
  ClaimedPerPeriod as ClaimedPerPeriodEntity,
  OwnerChanged as OwnerChangedEntity,
  OwnerNominated as OwnerNominatedEntity,
  TotalClaimed as TotalClaimedEntity,
  TotalClaimedPerPeriod as TotalClaimedPerPeriodEntity
} from "../generated/schema"

// In The Graph, setting string in an Enumeration is still seen as i32 type by the compiler.
export const enum Method {
  claimPeriod,
  claimPeriods,
  execute,
  unknown
}

export namespace MethodId {
  // function: claimPeriod(address recipient, uint256 period, uint256 balance, bytes32[] memory proof)
  export const claimPeriod = "0x8dbfd5e8" // = keccak256(abi.encodePacked("claimPeriod(address,uint256,uint256,bytes32[])"))
  // function: function claimPeriods(address recipient, Claim[] memory claims)
  //   ∟ struct Claim{uint256 period; uint256 balance; bytes32[] proof;}
  export const claimPeriods = "0xb03d8c2f" // = keccak256(abi.encodePacked("claimPeriods(address,(uint256,uint256,bytes32[])[])"))
  // function: execute(address _target, bytes _data)
  export const execute = "0x1cff79cd" // = keccak256(abi.encodePacked("execute(address,bytes)"))
}

// Define the enumeration content within the subgraph to prevent string input errors,
// which may only arise after deployment to Subgraph Studio and during indexing.
export namespace MethodName {
  export const claimPeriod = "claimPeriod"
  export const claimPeriods = "claimPeriods"
  export const execute = "execute"
  export const unknown = "unknown"
}

export const getEventId = (e: ethereum.Event): Bytes => {
  const dashBytes = Bytes.fromUTF8("-")
  const blockHash = e.block.hash
  const transactionHash = e.transaction.hash
  const logIndex = e.logIndex
  return blockHash
    .concat(dashBytes)
    .concat(transactionHash)
    .concat(dashBytes)
    .concatI32(logIndex.toI32())
}

export const concatIndex = (id: Bytes, index: i32): Bytes => {
  return id.concat(Bytes.fromUTF8("-")).concat(Bytes.fromI32(index))
}

export const getMethod = (methodId: Bytes): Method => {
  if (methodId.equals(Bytes.fromHexString(MethodId.claimPeriod))) {
    return Method.claimPeriod
  }
  if (methodId.equals(Bytes.fromHexString(MethodId.claimPeriods))) {
    return Method.claimPeriods
  }
  if (methodId.equals(Bytes.fromHexString(MethodId.execute))) {
    return Method.execute
  }
  return Method.unknown
}

export const getMethodName = (methodId: Bytes): string => {
  if (methodId.equals(Bytes.fromHexString(MethodId.claimPeriod))) {
    return MethodName.claimPeriod
  }
  if (methodId.equals(Bytes.fromHexString(MethodId.claimPeriods))) {
    return MethodName.claimPeriods
  }
  if (methodId.equals(Bytes.fromHexString(MethodId.execute))) {
    return MethodName.execute
  }
  return MethodName.unknown
}

// Prepend a "tuple" prefix (function params are arrays, not tuples)
// Refer: https://ethereum.stackexchange.com/questions/114582/the-graph-nodes-cant-decode-abi-encoded-data-containing-arrays
export const toTuple = (calldata: Uint8Array): Bytes => {
  const tuplePrefix = ByteArray.fromHexString(
    "0x0000000000000000000000000000000000000000000000000000000000000020"
  )
  const calldataAsTuple = new Uint8Array(tuplePrefix.length + calldata.length)

  // Concat prefix & original calldata
  calldataAsTuple.set(tuplePrefix, 0)
  calldataAsTuple.set(calldata, tuplePrefix.length)

  return Bytes.fromUint8Array(calldataAsTuple)
}

export function handleClaimed(event: ClaimedEvent): void {
  const id = getEventId(event)
  const zero = BigInt.fromU32(0)
  const one = Bytes.fromI32(1)
  const oneBigInt = BigInt.fromI32(1)

  const blockNumber = event.block.number
  const timestamp = event.block.timestamp
  const transactionHash = event.transaction.hash
  const transactionInput = event.transaction.input
  const from = changetype<Bytes>(event.transaction.from)
  const methodId = Bytes.fromUint8Array(transactionInput.subarray(0, 4))
  const calldata = transactionInput.subarray(4)
  const calldataAsTuple = toTuple(calldata)

  const recipient = changetype<Bytes>(event.params.recipient)
  const balance = event.params.balance
  const method = getMethod(methodId)
  const methodName = getMethodName(methodId)

  // As the AssemblyScript compiler struggles with null values in arrays, non-null arrays are employed here, with BigInt.fromU64(u64.MAX_VALUE) serving to signify the absence of a period.
  const periods: Array<BigInt> = [] // Array<BigInt | null> = []
  const balances: Array<BigInt> = []

  // Currently, the switch conditions (case values) are implicitly converted to u32, i.e. switching over strings or similar is not yet supported.
  // Refer: https://www.assemblyscript.org/examples/snippets.html#switch-case
  switch (method) {
    case Method.claimPeriod: {
      const decode = ethereum.decode(
        "(address,uint256,uint256,bytes32[])",
        calldataAsTuple
      )
      if (decode) {
        const claimPeriod = decode.toTuple()
        periods.push(claimPeriod[1].toBigInt())
        balances.push(claimPeriod[2].toBigInt())
      }
      break
    }
    case Method.claimPeriods: {
      const decode = ethereum.decode(
        "(address,(uint256,uint256,bytes32[])[])",
        calldataAsTuple
      )
      if (decode) {
        const claimPeriods = decode.toTuple()
        const claims = claimPeriods[1].toTupleArray<ethereum.Tuple>()
        for (let i = 0; i < claims.length; i++) {
          periods.push(claims[i][0].toBigInt())
          balances.push(claims[i][1].toBigInt())
        }
      }
      break
    }
    case Method.execute: {
      // Employing u64.MAX_VALUE as the unknown period value.
      periods.push(BigInt.fromU64(u64.MAX_VALUE))
      balances.push(balance)
      break
    }
    default: {
      // Employing u64.MAX_VALUE as the unknown period value.
      periods.push(BigInt.fromU64(u64.MAX_VALUE))
      balances.push(balance)
      break
    }
  }

  // ----------------------------------
  // --- Update TotalClaimed entity ---
  // ----------------------------------

  // TotalClaimed entity stores Claimed event occurrences, period count,
  // and cumulative balance claimed.
  let totalClaimedEntity = TotalClaimedEntity.load(one)
  // In the Subgraph handler, using === always returns false. Please use == for comparison.
  if (totalClaimedEntity == null) {
    totalClaimedEntity = new TotalClaimedEntity(one)
    totalClaimedEntity.countClaimed = zero
    totalClaimedEntity.countPeriod = zero
    totalClaimedEntity.totalBalance = zero
  }
  totalClaimedEntity.countClaimed =
    totalClaimedEntity.countClaimed.plus(oneBigInt)
  totalClaimedEntity.countPeriod = totalClaimedEntity.countPeriod.plus(
    BigInt.fromI32(periods.length)
  )
  totalClaimedEntity.totalBalance =
    totalClaimedEntity.totalBalance.plus(balance)

  // Save the entity to the store
  totalClaimedEntity.save()

  for (let i: i32 = 0; i < periods.length; i++) {
    const idWithIndex = concatIndex(id, i)
    const periodAsId = Bytes.fromByteArray(Bytes.fromBigInt(periods[i]))

    // --------------------------------------
    // --- Create ClaimedPerPeriod entity ---
    // --------------------------------------

    // ClaimedPerPeriod entity stores recipient and balance data
    // per period and recipient address.
    const claimedPerPeriodEntity = new ClaimedPerPeriodEntity(idWithIndex)
    claimedPerPeriodEntity.from = from
    claimedPerPeriodEntity.recipient = recipient
    claimedPerPeriodEntity.period = periods[i]
    claimedPerPeriodEntity.balance = balances[i]
    claimedPerPeriodEntity.blockNumber = blockNumber
    claimedPerPeriodEntity.blockTimestamp = timestamp
    claimedPerPeriodEntity.transactionHash = transactionHash
    claimedPerPeriodEntity.transactionMethodId = methodId
    claimedPerPeriodEntity.transactionMethodName = methodName

    // Save the entity to the store
    claimedPerPeriodEntity.save()

    // ----------------------------------------------
    // --- Update totalClaimedPerPeriodEntity entity ---
    // ----------------------------------------------

    let totalClaimedPerPeriodEntity =
      TotalClaimedPerPeriodEntity.load(periodAsId)
    if (totalClaimedPerPeriodEntity == null) {
      totalClaimedPerPeriodEntity = new TotalClaimedPerPeriodEntity(periodAsId)
      totalClaimedPerPeriodEntity.period = periods[i]
      totalClaimedPerPeriodEntity.totalBalance = zero
    }
    totalClaimedPerPeriodEntity.totalBalance =
      totalClaimedPerPeriodEntity.totalBalance.plus(balances[i])

    // Save the entity to the store
    totalClaimedPerPeriodEntity.save()
  }

  log.debug(
    "[debug] transactionHash: {}, blockNumber: {}, blockTimestamp: {}, methodId: {}, methodName: {}, from: {}, recipient: {}, balance: {}, periodsLength: {}, periods: [{}], balances: [{}]",
    [
      transactionHash.toHexString(),
      blockNumber.toString(),
      timestamp.toString(),
      methodId.toHexString(),
      methodName,
      from.toHexString(),
      recipient.toHexString(),
      balance.toString(),
      periods.length.toString(),
      periods.toString(),
      balances.toString()
    ]
  )
}

export function handleOwnerChanged(event: OwnerChangedEvent): void {
  const id = getEventId(event)

  let entity = new OwnerChangedEntity(id)
  entity.oldOwner = event.params.oldOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  log.info("[log] OwnerChanged event transaction hash: {}", [
    entity.transactionHash.toHexString()
  ])

  // Save the entity to the store
  entity.save()
}

export function handleOwnerNominated(event: OwnerNominatedEvent): void {
  const id = getEventId(event)

  let entity = new OwnerNominatedEntity(id)
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  log.info("[log] OwnerNominated event transaction hash: {}", [
    entity.transactionHash.toHexString()
  ])

  // Save the entity to the store
  entity.save()
}
