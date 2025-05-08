# 問題 05 - 天気に応じたメッセージを返そう

## 問題文

次の `getWeatherMessage` 関数は、与えられた天気に応じてメッセージを返す関数です。以下の仕様に従って実装してください。

## 条件

- 引数 `weather` の型は `"sunny"` | `"rainy"` | `"cloudy"` のいずれか
- 戻り値は次の通り
  - `"sunny"` → `"今日は晴れです。外に出かけましょう！"`
  - `"rainy"` → `"今日は雨です。傘を忘れずに。"`
  - `"cloudy"` → `"今日はくもりです。のんびり過ごしましょう。"`

## 例

```ts
getWeatherMessage("sunny"); // → "今日は晴れです。外に出かけましょう！"
```

## テスト

```bash
bun test tests/05-weather-message.test.ts
```

## 解けたら

Gitにコミットしていきましょう！

```bash
git add .
git commit -m "✅ 05 clear !!"
git push origin main
```
