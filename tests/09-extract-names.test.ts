import { describe, expect, it } from "vitest";
import { type User, extractNames } from "../exercises/09-extract-names";

describe("09-extract-names", () => {
  it("複数ユーザーの名前を抽出できる", () => {
    const users: User[] = [
      { id: 1, name: "田中", age: 25 },
      { id: 2, name: "佐藤", age: 30 },
      { id: 3, name: "鈴木", age: 22 },
    ];

    expect(extractNames(users)).toEqual(["田中", "佐藤", "鈴木"]);
  });

  it("空配列なら空配列を返す", () => {
    expect(extractNames([])).toEqual([]);
  });
});
