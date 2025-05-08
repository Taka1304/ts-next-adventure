import { describe, expect, it } from "vitest";
import { type Profile, updateProfile } from "../exercises/08-update-profile";

describe("08-update-profile", () => {
  it("ageだけ更新できる", () => {
    const original: Profile = {
      name: "田中",
      email: "tanaka@example.com",
      age: 25,
    };

    const updated = updateProfile(original, { age: 30 });
    expect(updated).toEqual({
      name: "田中",
      email: "tanaka@example.com",
      age: 30,
    });
  });

  it("emailとnameを更新できる", () => {
    const original: Profile = {
      name: "田中",
      email: "t@example.com",
      age: 25,
    };

    const updated = updateProfile(original, {
      name: "鈴木",
      email: "s@example.com",
    });
    expect(updated).toEqual({
      name: "鈴木",
      email: "s@example.com",
      age: 25,
    });
  });

  it("originalオブジェクトは変更されていない", () => {
    const original: Profile = {
      name: "田中",
      email: "t@example.com",
      age: 25,
    };

    updateProfile(original, { age: 30 });
    expect(original.age).toBe(25); // 不変であることを検証
  });
});
