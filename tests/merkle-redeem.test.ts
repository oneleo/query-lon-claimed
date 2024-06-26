import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  afterAll,
  assert,
  beforeAll,
  beforeEach,
  clearStore,
  describe,
  test
} from "matchstick-as/assembly/index"
import { concatIndex, getEventId, handleClaimed } from "../src/merkle-redeem"
import { CustomEvents } from "./merkle-redeem-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

const one = Bytes.fromI32(1).toHexString()

export const arrayToString = (arr: Array<BigInt>): string => {
  let result: string = "["
  for (let i: i32 = 0; i < arr.length; i++) {
    if (i > 0) {
      result = result.concat(", ")
    }
    result = result.concat(arr[i].toString())
  }
  result = result.concat("]")
  return result
}

describe("Describe entity assertions", () => {
  beforeAll(() => {
    // clear the store before each test in the file
    clearStore()

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })

  beforeEach(() => {
    // clear the store before each test in the file
    clearStore()
  })

  afterAll(() => {
    // clear the store after all test in the file
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  // ------------------------------------
  // --- Test ClaimedPerPeriod entity ---
  // ------------------------------------

  test(
    "Test ClaimedPerPeriod entity data on claimPeriod() transaction",
    () => {
      // Simulate claimPeriod() transaction
      const newClaimPeriodEvent = CustomEvents.createClaimPeriodEvent()
      handleClaimed(newClaimPeriodEvent)

      // Configure claimPeriod() transaction parameters
      const id = getEventId(newClaimPeriodEvent)
      const recipient = Address.fromHexString(
        "0x90e5e30d3A891693d6822e06b52562Dd4dBacC83"
      ).toHexString()
      const balance = BigInt.fromString("570759569000000000000")
      const period = BigInt.fromString("0")
      const balancePerPeriod = [balance]
      const periods = [period]
      const periodsLength = 1 // In claimPeriod() transactions, always 1 period is fixed

      // Validate entity count
      assert.entityCount("ClaimedPerPeriod", periodsLength)

      for (let i: i32 = 0; i < periodsLength; i++) {
        // Validate recipient
        assert.fieldEquals(
          "ClaimedPerPeriod",
          concatIndex(id, i).toHexString(),
          "recipient",
          recipient
        )

        // Validate balance
        assert.fieldEquals(
          "ClaimedPerPeriod",
          concatIndex(id, i).toHexString(),
          "balance",
          balancePerPeriod[i].toString()
        )

        // Validate period
        assert.fieldEquals(
          "ClaimedPerPeriod",
          concatIndex(id, i).toHexString(),
          "period",
          periods[i].toString()
        )
      }
    },
    false // Expected success
  )

  test(
    "Test ClaimedPerPeriod entity data on claimPeriods() (single period)",
    () => {
      // Simulate claimPeriods() (single period) transaction
      const newClaimPeriodsSingleEvent =
        CustomEvents.createClaimPeriodsSingleEvent()
      handleClaimed(newClaimPeriodsSingleEvent)

      // Configure claimPeriod() transaction parameters
      const id = getEventId(newClaimPeriodsSingleEvent)
      const recipient = Address.fromHexString(
        "0x32BF0Ea129625Be1EF65072eb0115CB91F4182Ba"
      ).toHexString()
      const balancePerPeriod = ["20000000000000000000"].map<BigInt>((str) =>
        BigInt.fromString(str)
      )
      const periods = ["0"].map<BigInt>((str) => BigInt.fromString(str))
      const periodsLength = periods.length

      // Validate entity count
      assert.entityCount("ClaimedPerPeriod", periodsLength)

      for (let i: i32 = 0; i < periodsLength; i++) {
        // Validate recipient
        assert.fieldEquals(
          "ClaimedPerPeriod",
          concatIndex(id, i).toHexString(),
          "recipient",
          recipient
        )

        // Validate balance
        assert.fieldEquals(
          "ClaimedPerPeriod",
          concatIndex(id, i).toHexString(),
          "balance",
          balancePerPeriod[i].toString()
        )

        // Validate period
        assert.fieldEquals(
          "ClaimedPerPeriod",
          concatIndex(id, i).toHexString(),
          "period",
          periods[i].toString()
        )
      }
    },
    false // Expected success
  )

  test(
    "Test ClaimedPerPeriod entity data on claimPeriods() (multiple periods)",
    () => {
      // Simulate claimPeriods() (multiple periods) transaction
      const newClaimPeriodsMultipleEvent =
        CustomEvents.createClaimPeriodsMultipleEvent()
      handleClaimed(newClaimPeriodsMultipleEvent)

      // Configure claimPeriod() transaction parameters
      const id = getEventId(newClaimPeriodsMultipleEvent)
      const recipient = Address.fromHexString(
        "0x2250dd2642F60730f5FDBfdd978626E61EBe864e"
      ).toHexString()
      const balancePerPeriod = [
        "130630468000000000000",
        "2316868000000000000",
        "2247909000000000000",
        "1252679000000000000",
        "1677993000000000000",
        "4276680000000000000",
        "70154602000000000000",
        "9925028000000000000",
        "139978163000000000000",
        "86257147000000000000",
        "60676810000000000000",
        "55178538000000000000"
      ].map<BigInt>((str) => BigInt.fromString(str))
      const periods = [
        "25",
        "23",
        "22",
        "21",
        "20",
        "19",
        "18",
        "17",
        "16",
        "15",
        "14",
        "13"
      ].map<BigInt>((str) => BigInt.fromString(str))
      const periodsLength = periods.length

      // Validate entity count
      assert.entityCount("ClaimedPerPeriod", periodsLength)

      for (let i: i32 = 0; i < periodsLength; i++) {
        // Validate recipient
        assert.fieldEquals(
          "ClaimedPerPeriod",
          concatIndex(id, i).toHexString(),
          "recipient",
          recipient
        )

        // Validate balance
        assert.fieldEquals(
          "ClaimedPerPeriod",
          concatIndex(id, i).toHexString(),
          "balance",
          balancePerPeriod[i].toString()
        )

        // Validate period
        assert.fieldEquals(
          "ClaimedPerPeriod",
          concatIndex(id, i).toHexString(),
          "period",
          periods[i].toString()
        )
      }
    },
    false // Expected success
  )

  test(
    "Test ClaimedPerPeriod entity data on execute()",
    () => {
      // Simulate execute() transaction
      const newExecuteEvent = CustomEvents.createExecuteEvent()
      handleClaimed(newExecuteEvent)

      // Configure claimPeriod() transaction parameters
      const id = getEventId(newExecuteEvent)
      const recipient = Address.fromHexString(
        "0x3021B1A8bB7d73d0afaA3537040EfAb630dB2958"
      ).toHexString()
      const balance = BigInt.fromString("1000000000000000000000")
      const balancePerPeriod = [balance]
      // Employing u64.MAX_VALUE as the unknown period value
      const periods = [u64.MAX_VALUE].map<BigInt>((num) => BigInt.fromU64(num))
      const periodsLength = periods.length

      // Validate entity count
      assert.entityCount("ClaimedPerPeriod", periodsLength)

      for (let i: i32 = 0; i < periodsLength; i++) {
        // Validate recipient
        assert.fieldEquals(
          "ClaimedPerPeriod",
          concatIndex(id, i).toHexString(),
          "recipient",
          recipient
        )

        // Validate balance
        assert.fieldEquals(
          "ClaimedPerPeriod",
          concatIndex(id, i).toHexString(),
          "balance",
          balancePerPeriod[i].toString()
        )

        // Validate period
        assert.fieldEquals(
          "ClaimedPerPeriod",
          concatIndex(id, i).toHexString(),
          "period",
          periods[i].toString()
        )
      }
    },
    false // Expected success
  )

  test(
    "Test ClaimedPerPeriod entity data on unknown function",
    () => {
      // Simulate unknown function transaction
      const newUnknownEvent = CustomEvents.createUnknownEvent_0xa2d41b9e()
      handleClaimed(newUnknownEvent)

      // Configure claimPeriod() transaction parameters
      const id = getEventId(newUnknownEvent)
      const recipient = Address.fromHexString(
        "0x718811e2d1170db844d0c5de6D276b299f2916a9"
      ).toHexString()
      const balance = BigInt.fromString("1000000000000000000000")
      const balancePerPeriod = [balance]
      // Employing u64.MAX_VALUE as the unknown period value
      const periods = [u64.MAX_VALUE].map<BigInt>((num) => BigInt.fromU64(num))
      const periodsLength = periods.length

      // Validate entity count
      assert.entityCount("ClaimedPerPeriod", periodsLength)

      for (let i: i32 = 0; i < periodsLength; i++) {
        // Validate recipient
        assert.fieldEquals(
          "ClaimedPerPeriod",
          concatIndex(id, i).toHexString(),
          "recipient",
          recipient
        )

        // Validate balance
        assert.fieldEquals(
          "ClaimedPerPeriod",
          concatIndex(id, i).toHexString(),
          "balance",
          balancePerPeriod[i].toString()
        )

        // Validate period
        assert.fieldEquals(
          "ClaimedPerPeriod",
          concatIndex(id, i).toHexString(),
          "period",
          periods[i].toString()
        )
      }
    },
    false // Expected success
  )

  // --------------------------------
  // --- Test TotalClaimed entity ---
  // --------------------------------

  test(
    "Test TotalClaimed entity data on claimPeriod() transaction",
    () => {
      // Simulate claimPeriod() transaction
      const newClaimPeriodEvent = CustomEvents.createClaimPeriodEvent()
      handleClaimed(newClaimPeriodEvent)

      // Configure claimPeriod() transaction parameters
      const balance = BigInt.fromString("570759569000000000000")
      const periodsLength = 1 // In claimPeriod() transactions, always 1 period is fixed

      // Validate entity count
      assert.entityCount("TotalClaimed", 1)

      // Validate countClaimed
      assert.fieldEquals("TotalClaimed", one, "countClaimed", "1")

      // Validate countPeriod
      assert.fieldEquals(
        "TotalClaimed",
        one,
        "countPeriod",
        periodsLength.toString()
      ) // In claimPeriod() transactions, always 1 period is fixed

      // Validate totalBalance
      assert.fieldEquals(
        "TotalClaimed",
        one,
        "totalBalance",
        balance.toString()
      )
    },
    false // Expected success
  )

  test(
    "Test TotalClaimed entity data on claimPeriods() (single period)",
    () => {
      // Simulate claimPeriods() (single period) transaction
      const newClaimPeriodsSingleEvent =
        CustomEvents.createClaimPeriodsSingleEvent()
      handleClaimed(newClaimPeriodsSingleEvent)

      // Configure claimPeriod() transaction parameters
      const balancePerPeriod = ["20000000000000000000"].map<BigInt>((str) =>
        BigInt.fromString(str)
      )
      const periods = ["0"].map<BigInt>((str) => BigInt.fromString(str))
      const totalBalance = balancePerPeriod.reduce<BigInt>(
        (x, y) => x.plus(y),
        BigInt.fromString("0")
      )
      const periodsLength = periods.length

      // Validate entity count
      assert.entityCount("TotalClaimed", 1)

      // Validate countClaimed
      assert.fieldEquals("TotalClaimed", one, "countClaimed", "1")

      // Validate countPeriod
      assert.fieldEquals(
        "TotalClaimed",
        one,
        "countPeriod",
        periodsLength.toString()
      ) // In claimPeriod() transactions, always 1 period is fixed

      // Validate totalBalance
      assert.fieldEquals(
        "TotalClaimed",
        one,
        "totalBalance",
        totalBalance.toString()
      )
    },
    false // Expected success
  )

  test(
    "Test TotalClaimed entity data on claimPeriods() (multiple periods)",
    () => {
      // Simulate claimPeriods() (multiple periods) transaction
      const newClaimPeriodsMultipleEvent =
        CustomEvents.createClaimPeriodsMultipleEvent()
      handleClaimed(newClaimPeriodsMultipleEvent)

      // Configure claimPeriod() transaction parameters
      const balancePerPeriod = [
        "130630468000000000000",
        "2316868000000000000",
        "2247909000000000000",
        "1252679000000000000",
        "1677993000000000000",
        "4276680000000000000",
        "70154602000000000000",
        "9925028000000000000",
        "139978163000000000000",
        "86257147000000000000",
        "60676810000000000000",
        "55178538000000000000"
      ].map<BigInt>((str) => BigInt.fromString(str))
      const periods = [
        "25",
        "23",
        "22",
        "21",
        "20",
        "19",
        "18",
        "17",
        "16",
        "15",
        "14",
        "13"
      ].map<BigInt>((str) => BigInt.fromString(str))
      const totalBalance = balancePerPeriod.reduce<BigInt>(
        (x, y) => x.plus(y),
        BigInt.fromString("0")
      )
      const periodsLength = periods.length

      // Validate entity count
      assert.entityCount("TotalClaimed", 1)

      // Validate countClaimed
      assert.fieldEquals("TotalClaimed", one, "countClaimed", "1")

      // Validate countPeriod
      assert.fieldEquals(
        "TotalClaimed",
        one,
        "countPeriod",
        periodsLength.toString()
      ) // In claimPeriod() transactions, always 1 period is fixed

      // Validate totalBalance
      assert.fieldEquals(
        "TotalClaimed",
        one,
        "totalBalance",
        totalBalance.toString()
      )
    },
    false // Expected success
  )

  test(
    "Test TotalClaimed entity data on execute()",
    () => {
      // Simulate execute() transaction
      const newExecuteEvent = CustomEvents.createExecuteEvent()
      handleClaimed(newExecuteEvent)

      // Configure claimPeriod() transaction parameters
      const balance = BigInt.fromString("1000000000000000000000")
      // Employing u64.MAX_VALUE as the unknown period value
      const periods = [u64.MAX_VALUE].map<BigInt>((num) => BigInt.fromU64(num))
      const periodsLength = periods.length

      // Validate entity count
      assert.entityCount("TotalClaimed", 1)

      // Validate countClaimed
      assert.fieldEquals("TotalClaimed", one, "countClaimed", "1")

      // Validate countPeriod
      assert.fieldEquals(
        "TotalClaimed",
        one,
        "countPeriod",
        periodsLength.toString()
      ) // In claimPeriod() transactions, always 1 period is fixed

      // Validate totalBalance
      assert.fieldEquals(
        "TotalClaimed",
        one,
        "totalBalance",
        balance.toString()
      )
    },
    false // Expected success
  )

  test(
    "Test TotalClaimed entity data on unknown function",
    () => {
      // Simulate unknown function transaction
      const newUnknownEvent = CustomEvents.createUnknownEvent_0xa2d41b9e()
      handleClaimed(newUnknownEvent)

      // Configure claimPeriod() transaction parameters
      const balance = BigInt.fromString("1000000000000000000000")
      // Employing u64.MAX_VALUE as the unknown period value
      const periods = [u64.MAX_VALUE].map<BigInt>((num) => BigInt.fromU64(num))
      const periodsLength = periods.length

      // Validate entity count
      assert.entityCount("TotalClaimed", 1)

      // Validate countClaimed
      assert.fieldEquals("TotalClaimed", one, "countClaimed", "1")

      // Validate countPeriod
      assert.fieldEquals(
        "TotalClaimed",
        one,
        "countPeriod",
        periodsLength.toString()
      ) // In claimPeriod() transactions, always 1 period is fixed

      // Validate totalBalance
      assert.fieldEquals(
        "TotalClaimed",
        one,
        "totalBalance",
        balance.toString()
      )
    },
    false // Expected success
  )

  // -----------------------------------------------
  // --- Test TotalClaimedPerPeriodEntity entity ---
  // -----------------------------------------------

  test(
    "Test TotalClaimedPerPeriodEntity entity data on claimPeriod() transaction",
    () => {
      // Simulate claimPeriod() transaction
      const newClaimPeriodEvent = CustomEvents.createClaimPeriodEvent()
      handleClaimed(newClaimPeriodEvent)

      // Configure claimPeriod() transaction parameters
      const balance = BigInt.fromString("570759569000000000000")
      const period = "0"
      const periodAsId = Bytes.fromByteArray(
        Bytes.fromBigInt(BigInt.fromString(period))
      ).toHexString()

      // Validate entity count
      assert.entityCount("TotalClaimedPerPeriod", 1)

      // Validate period
      assert.fieldEquals("TotalClaimedPerPeriod", periodAsId, "period", period) // The period as this entity id

      // Validate totalBalance
      assert.fieldEquals(
        "TotalClaimedPerPeriod",
        periodAsId,
        "totalBalance",
        balance.toString()
      )
    },
    false // Expected success
  )

  test(
    "Test TotalClaimedPerPeriodEntity entity data on claimPeriods() (single period)",
    () => {
      // Simulate claimPeriods() (single period) transaction
      const newClaimPeriodsSingleEvent =
        CustomEvents.createClaimPeriodsSingleEvent()
      handleClaimed(newClaimPeriodsSingleEvent)

      // Configure claimPeriod() transaction parameters
      const balancePerPeriod = ["20000000000000000000"].map<BigInt>((str) =>
        BigInt.fromString(str)
      )
      const periods = ["0"].map<BigInt>((str) => BigInt.fromString(str))
      const periodsAsIds = periods.map<Bytes>((bigint) =>
        Bytes.fromByteArray(Bytes.fromBigInt(bigint))
      )
      const periodsLength = periods.length

      // Validate entity count
      assert.entityCount("TotalClaimedPerPeriod", periodsLength)

      for (let i: i32 = 0; i < periodsLength; i++) {
        // Validate recipient
        assert.fieldEquals(
          "TotalClaimedPerPeriod",
          periodsAsIds[i].toHexString(),
          "period",
          periods[i].toString()
        ) // The recipient as this entity id

        // Validate totalBalance
        assert.fieldEquals(
          "TotalClaimedPerPeriod",
          periodsAsIds[i].toHexString(),
          "totalBalance",
          balancePerPeriod[i].toString()
        )
      }
    },
    false // Expected success
  )

  test(
    "Test TotalClaimedPerPeriodEntity entity data on claimPeriods() (multiple periods)",
    () => {
      // Simulate claimPeriods() (multiple periods) transaction
      const newClaimPeriodsMultipleEvent =
        CustomEvents.createClaimPeriodsMultipleEvent()
      handleClaimed(newClaimPeriodsMultipleEvent)

      // Configure claimPeriod() transaction parameters
      const balancePerPeriod = [
        "130630468000000000000",
        "2316868000000000000",
        "2247909000000000000",
        "1252679000000000000",
        "1677993000000000000",
        "4276680000000000000",
        "70154602000000000000",
        "9925028000000000000",
        "139978163000000000000",
        "86257147000000000000",
        "60676810000000000000",
        "55178538000000000000"
      ].map<BigInt>((str) => BigInt.fromString(str))
      const periods = [
        "25",
        "23",
        "22",
        "21",
        "20",
        "19",
        "18",
        "17",
        "16",
        "15",
        "14",
        "13"
      ].map<BigInt>((str) => BigInt.fromString(str))
      const periodsAsIds = periods.map<Bytes>((bigint) =>
        Bytes.fromByteArray(Bytes.fromBigInt(bigint))
      )
      const periodsLength = periods.length

      // Validate entity count
      assert.entityCount("TotalClaimedPerPeriod", periodsLength)

      for (let i: i32 = 0; i < periodsLength; i++) {
        // Validate recipient
        assert.fieldEquals(
          "TotalClaimedPerPeriod",
          periodsAsIds[i].toHexString(),
          "period",
          periods[i].toString()
        ) // The recipient as this entity id

        // Validate totalBalance
        assert.fieldEquals(
          "TotalClaimedPerPeriod",
          periodsAsIds[i].toHexString(),
          "totalBalance",
          balancePerPeriod[i].toString()
        )
      }
    },
    false // Expected success
  )

  test(
    "Test TotalClaimedPerPeriodEntity entity data on execute()",
    () => {
      // Simulate execute() transaction
      const newExecuteEvent = CustomEvents.createExecuteEvent()
      handleClaimed(newExecuteEvent)

      // Configure claimPeriod() transaction parameters
      const balance = BigInt.fromString("1000000000000000000000")
      // Employing u64.MAX_VALUE as the unknown period value
      const period = BigInt.fromU64(u64.MAX_VALUE).toString()
      const periodAsId = Bytes.fromByteArray(
        Bytes.fromBigInt(BigInt.fromString(period))
      ).toHexString()

      // Validate entity count
      assert.entityCount("TotalClaimedPerPeriod", 1)

      // Validate period
      assert.fieldEquals("TotalClaimedPerPeriod", periodAsId, "period", period) // The period as this entity id

      // Validate totalBalance
      assert.fieldEquals(
        "TotalClaimedPerPeriod",
        periodAsId,
        "totalBalance",
        balance.toString()
      )
    },
    false // Expected success
  )

  test(
    "Test TotalClaimedPerPeriodEntity entity data on unknown function",
    () => {
      // Simulate unknown function transaction
      const newUnknownEvent = CustomEvents.createUnknownEvent_0xa2d41b9e()
      handleClaimed(newUnknownEvent)

      // Configure claimPeriod() transaction parameters
      const recipient = Address.fromHexString(
        "0x718811e2d1170db844d0c5de6D276b299f2916a9"
      ).toHexString()
      const balance = BigInt.fromString("1000000000000000000000")
      // Employing u64.MAX_VALUE as the unknown period value
      const period = BigInt.fromU64(u64.MAX_VALUE).toString()
      const periodAsId = Bytes.fromByteArray(
        Bytes.fromBigInt(BigInt.fromString(period))
      ).toHexString()

      // Validate entity count
      assert.entityCount("TotalClaimedPerPeriod", 1)

      // Validate period
      assert.fieldEquals("TotalClaimedPerPeriod", periodAsId, "period", period) // The period as this entity id

      // Validate totalBalance
      assert.fieldEquals(
        "TotalClaimedPerPeriod",
        periodAsId,
        "totalBalance",
        balance.toString()
      )
    },
    false // Expected success
  )
})
