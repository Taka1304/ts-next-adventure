# 問題 04 - ユーザー情報を整形しよう

## 問題文

次の `formatUser` 関数は、ユーザーの名前と年齢を持つオブジェクトを受け取り、整形された文字列を返す関数です。以下の要件を満たすように関数を実装してください。

## 条件

- 引数は `User` 型のオブジェクトとする
- `User` 型は `{ name: string; age: number }` と定義する
- 戻り値は `"〇〇（〇歳）"` の形式とする

## 例

```ts
formatUser({ name: "田中", age: 25 }); // → "田中（25歳）"
```

## テスト

```bash
bun test tests/04-format-user.test.ts
```

## 解けたら

Gitにコミットしていきましょう！

```bash
git add .
git commit -m "✅ 04 clear !!"
git push origin main
```
