import { describe, expect, it } from "vitest";
import { isAdult } from "../exercises/02-basic-types";

describe("02-basic-types", () => {
  it("18歳以上は成人", () => {
    expect(isAdult("田中", 22)).toBe("田中さんは成人です");
    expect(isAdult("高橋", 18)).toBe("高橋さんは成人です");
  });

  it("18歳未満は未成年", () => {
    expect(isAdult("佐藤", 17)).toBe("佐藤さんは未成年です");
    expect(isAdult("山本", 0)).toBe("山本さんは未成年です");
  });
});
