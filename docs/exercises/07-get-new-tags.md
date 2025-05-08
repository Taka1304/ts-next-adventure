# 問題 07 - タグの差分を取得しよう（イミュータブル編）

## 問題文

既存のタグ配列と、新たに選択されたタグ配列が与えられます。新たに追加されたタグだけを抽出する関数 `getNewTags` を実装してください。

ただし、**元の配列は変更しない（イミュータブルに処理する）こと**が条件です。

## 条件

- `originalTags: string[]`：元のタグ配列
- `selectedTags: string[]`：新たに選択されたタグ
- 戻り値は `"selectedTags に含まれるが originalTags に含まれない要素"` の配列
- 元の配列（`originalTags`）は変更しないこと

## 例

```ts
getNewTags(["react", "next"], ["react", "next", "typescript"]); // → ["typescript"]
getNewTags([], ["react"]); // → ["react"]
getNewTags(["a", "b"], ["a", "b"]); // → []
```

## ヒント

[配列の破壊的操作について](https://typescriptbook.jp/reference/values-types-variables/array/array-operations)

## テスト

```bash
bun test tests/07-get-new-tags.test.ts
```

## 解けたら

Gitにコミットしていきましょう！

```bash
git add .
git commit -m "✅ 07 clear !!"
git push origin main
```
