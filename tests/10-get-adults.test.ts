import { describe, expect, it } from "vitest";
import { type User, getAdults } from "../exercises/10-get-adults";

describe("10-get-adults", () => {
  it("20歳以上のユーザーのみ抽出", () => {
    const users: User[] = [
      { name: "田中", age: 19 },
      { name: "佐藤", age: 22 },
      { name: "鈴木", age: 20 },
    ];

    expect(getAdults(users)).toEqual([
      { name: "佐藤", age: 22 },
      { name: "鈴木", age: 20 },
    ]);
  });

  it("すべて未成年なら空配列", () => {
    expect(
      getAdults([
        { name: "山本", age: 17 },
        { name: "井上", age: 10 },
      ]),
    ).toEqual([]);
  });

  it("空配列を渡したら空配列を返す", () => {
    expect(getAdults([])).toEqual([]);
  });
});
