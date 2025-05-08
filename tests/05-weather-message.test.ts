import { describe, expect, it } from "vitest";
import { getWeatherMessage } from "../exercises/05-weather-message";

describe("05-weather-message", () => {
  it("晴れのメッセージが正しい", () => {
    expect(getWeatherMessage("sunny")).toBe("今日は晴れです。外に出かけましょう！");
  });

  it("雨のメッセージが正しい", () => {
    expect(getWeatherMessage("rainy")).toBe("今日は雨です。傘を忘れずに。");
  });

  it("くもりのメッセージが正しい", () => {
    expect(getWeatherMessage("cloudy")).toBe("今日はくもりです。のんびり過ごしましょう。");
  });
});
