import { toggleSortOrderByTimestamp } from "../utils";

const unorderedMock = [
  {
    timestamp: {
      seconds: 1500800000
    }
  },
  {
    timestamp: {
      seconds: 1500900000
    }
  },
  {
    timestamp: {
      seconds: 1500700000
    }
  }
];

const oldestMock = [
  {
    timestamp: {
      seconds: 1500700000
    }
  },
  {
    timestamp: {
      seconds: 1500800000
    }
  },
  {
    timestamp: {
      seconds: 1500900000
    }
  }
];

const newestMock = [
  {
    timestamp: {
      seconds: 1500900000
    }
  },
  {
    timestamp: {
      seconds: 1500800000
    }
  },
  {
    timestamp: {
      seconds: 1500700000
    }
  }
];

describe("Testing utils methods", () => {
  it("toggleSortOrderByTimestamp() should reorder based on timestamp", () => {
    expect(toggleSortOrderByTimestamp(unorderedMock, "Newest")).toEqual(
      newestMock
    );
    expect(toggleSortOrderByTimestamp(unorderedMock, "Oldest")).toEqual(
      oldestMock
    );
  });
});
