import { describe, expect, it } from "vitest";
import { type User, getUserCity } from "../exercises/06-user-city";

describe("06-user-city", () => {
  it("都市が存在する場合はその値を返す", () => {
    const user: User = {
      name: "田中",
      profile: { location: { city: "東京" } },
    };
    expect(getUserCity(user)).toBe("東京");
  });

  it("都市が存在しない場合は'不明'", () => {
    const user: User = {
      name: "佐藤",
    };
    expect(getUserCity(user)).toBe("不明");
  });

  it("locationはあるがcityがない場合も'不明'", () => {
    const user: User = {
      name: "鈴木",
      profile: { location: {} },
    };
    expect(getUserCity(user)).toBe("不明");
  });
});
