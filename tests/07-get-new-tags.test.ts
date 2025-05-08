import { describe, expect, it } from "vitest";
import { getNewTags } from "../exercises/07-get-new-tags";

describe("07-get-new-tags", () => {
  it("新しいタグのみを抽出できる", () => {
    expect(getNewTags(["react", "next"], ["react", "next", "typescript"])).toEqual(["typescript"]);
  });

  it("元が空配列の場合、すべて新規タグ", () => {
    expect(getNewTags([], ["react", "next"])).toEqual(["react", "next"]);
  });

  it("差分がない場合は空配列", () => {
    expect(getNewTags(["a", "b"], ["a", "b"])).toEqual([]);
  });

  it("originalTags を変更していないこと", () => {
    const original = ["react"];
    const selected = ["react", "next"];
    getNewTags(original, selected);
    expect(original).toEqual(["react"]); // 不変であることを検証
  });
});
