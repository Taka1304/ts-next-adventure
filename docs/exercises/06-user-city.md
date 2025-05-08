# 問題 06 - ユーザープロフィールの安全な参照

## 問題文

ユーザーオブジェクトが与えられますが、プロフィール情報が存在しない場合もあります。関数 `getUserCity` を実装して、以下の条件に従ってユーザーの都市名を取得してください。

## 条件

- ユーザーは次の型で表されます：

```ts
type User = {
  name: string;
  profile?: {
    location?: {
      city?: string;
    };
  };
};
```

- user.profile.location.city が存在すればその値を返す
- 存在しない場合は "不明" を返す

## 例

```ts
getUserCity({ name: "田中", profile: { location: { city: "東京" } } }); // → "東京"
getUserCity({ name: "佐藤" }); // → "不明"
```

## テスト

```bash
bun test tests/06-user-city.test.ts
```

## 解けたら

Gitにコミットしていきましょう！

```bash
git add .
git commit -m "✅ 06 clear !!"
git push origin main
```
