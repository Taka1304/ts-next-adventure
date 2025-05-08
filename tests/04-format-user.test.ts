import { describe, expect, it } from "vitest";
import { type User, formatUser } from "../exercises/04-format-user";

describe("04-format-user", () => {
  it("名前と年齢を整形できる", () => {
    const user: User = { name: "田中", age: 25 };
    expect(formatUser(user)).toBe("田中（25歳）");
  });

  it("別のユーザーでも正しく動作する", () => {
    expect(formatUser({ name: "佐藤", age: 40 })).toBe("佐藤（40歳）");
  });
});
