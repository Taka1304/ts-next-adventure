import { describe, expect, it } from "vitest";
import { hello } from "../exercises/01-hello-world";

describe("01-hello-world", () => {
  it("太郎さん", () => {
    expect(hello("太郎")).toBe("太郎さん こんにちは！");
  });
  it("花子さん", () => {
    expect(hello("花子")).toBe("花子さん こんにちは！");
  });
  it("Data Dreamersさん", () => {
    expect(hello("Data Dreamers")).toBe("Data Dreamersさん こんにちは！");
  });
});
