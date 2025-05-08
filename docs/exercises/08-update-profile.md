# 問題 08 - プロフィール情報を一部更新しよう

## 問題文

ユーザーのプロフィール情報オブジェクトが与えられます。これに対して、更新情報（部分的なオブジェクト）を適用し、新しいプロフィールオブジェクトを返す関数 `updateProfile` を実装してください。

ただし、**元のオブジェクトは変更せず（イミュータブルに）**、**スプレッド構文を使って**処理すること。

## 条件

- `original: Profile`（元のプロフィール）
- `updates: Partial<Profile>`（更新対象。`name` や `email` などが含まれるかもしれない）
- `Profile` 型は以下の通り：

```ts
type Profile = {
  name: string;
  email: string;
  age: number;
};
```

- `updates` に含まれるフィールドのみを上書きした新しいオブジェクトを返す
- `original` を直接変更してはいけない

## 例

```ts
updateProfile(
  { name: "田中", email: "t@example.com", age: 25 },
  { age: 26 }
); // → { name: "田中", email: "t@example.com", age: 26 }
```

## テスト

```bash
bun test tests/08-update-profile.test.ts
```

## 解けたら

Gitにコミットしていきましょう！

```bash
git add .
git commit -m "✅ 08 clear !!"
git push origin main
```
