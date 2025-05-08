# 問題 01 - Hello

## 問題文

次の関数 `hello` は、与えられた名前に「さん こんにちは！」をつけて返しま

ただし、以下の制約に従って関数を実装してください。

## 条件

- `name` は文字列 (`string`)
- 「さん」と「こんにちは！」の間は半角スペース
- 「こんにちは！」の「！」は全角文字

## 例

```ts
hello("太郎"); // "太郎さん こんにちは！"
hello("花子"); // "花子さん こんにちは！"
```

## テスト

ターミナルを開いて，以下のコマンドを実行します．

```bash
bun test tests/01-hello-world.test.ts
```

## 解けたら

Gitにコミットしていきましょう！

```bash
git add .
git commit -m "✅ 01 clear !!"
git push origin main
```
