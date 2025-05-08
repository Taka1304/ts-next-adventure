import { describe, expect, it } from "vitest";
import { filterEvenNumbers } from "../exercises/03-filter-even-numbers";

describe("03-filter-even-numbers", () => {
  it("偶数のみを抽出できる", () => {
    expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(filterEvenNumbers([0, 8, 13, 17, 24])).toEqual([0, 8, 24]);
  });

  it("偶数がない場合は空配列", () => {
    expect(filterEvenNumbers([1, 3, 5])).toEqual([]);
  });

  it("空配列も対応できる", () => {
    expect(filterEvenNumbers([])).toEqual([]);
  });
});
