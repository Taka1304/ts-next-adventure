# 問題 03 - 配列から偶数を抽出しよう

## 問題文

数値の配列 `numbers` が与えられたときに、偶数のみを取り出して配列として返す関数 `filterEvenNumbers` を実装してください。

## 条件

- 引数は `number[]` 型
- 偶数（2で割り切れる）だけをフィルタリングする
- 元の配列の順番は維持すること

## 例

```ts
filterEvenNumbers([1, 2, 3, 4, 5, 6]); // → [2, 4, 6]
filterEvenNumbers([11, 13, 15]); // → []
```

## テスト

ターミナルを開いて，以下のコマンドを実行します．

```bash
bun test tests/03-filter-even-numbers.test.ts
```

## 解けたら

Gitにコミットしていきましょう！

```bash
git add .
git commit -m "✅ 03 clear !!"
git push origin main
```
