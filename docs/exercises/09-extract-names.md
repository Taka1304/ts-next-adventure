# 問題 09 - ユーザーの名前リストを作ろう

## 問題文

複数のユーザー情報が与えられたときに、それぞれのユーザーの名前の一覧（`string[]`）を作成する関数 `extractNames` を実装してください。

この関数では **`map` メソッド**を用いて、ユーザー配列から `name` プロパティだけを取り出します。

## 条件

- 引数は `User[]`
- `User` 型は以下の通り：

```ts
type User = {
  id: number;
  name: string;
  age: number;
};
```

- 戻り値は `string[]`（ユーザーの名前一覧）

## 例

```ts
extractNames([
  { id: 1, name: "田中", age: 25 },
  { id: 2, name: "佐藤", age: 30 }
]); // → ["田中", "佐藤"]
```

## テスト

```bash
bun test tests/09-extract-names.test.ts
```

## 解けたら

Gitにコミットしていきましょう！

```bash
git add .
git commit -m "✅ 09 clear !!"
git push origin main
```
