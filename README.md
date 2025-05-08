# TypeScript & Next.js Learning Exercises

このリポジトリは、TypeScriptとNext.jsの基本を実践的に学ぶための演習教材です。  
Git操作・TypeScript文法・配列操作・型安全な開発手法など、現場で使えるスキルを体系的に学べます。

---

## ✨ 学べること

- GitとGitHubの基本操作（fork, clone, commitなど）
- TypeScriptの文法（型定義、関数、オブジェクト、Union型など）
- 配列・オブジェクトの操作（map, filter, spread構文）
- テスト駆動での学習（`bun test` による自動チェック）
- Next.jsでのフロントエンド開発（Lesson形式）

---

## 🏁 環境構築

まずは [docs/00-setup.md](./docs/00-setup.md) を参照して、開発環境を準備してください。

---

## 📘 演習問題一覧（TypeScript）

| No. | テーマ                             | 問題リンク                                              |
|-----|----------------------------------|-------------------------------------------------------|
| 01  | Hello Worldの関数                 | [01-hello-world](./docs/exercises/01-hello-world.md) |
| 02  | 基本の型チェック                   | [02-basic-types](./docs/exercises/02-basic-types.md) |
| 03  | 配列から偶数を抽出                 | [03-filter-even-numbers](./docs/exercises/03-filter-even-numbers.md) |
| 04  | ユーザー情報の整形                 | [04-format-user](./docs/exercises/04-format-user.md) |
| 05  | Union型の分岐処理                 | [05-weather-message](./docs/exercises/05-weather-message.md) |
| 06  | Optional Chainの使い方            | [06-user-city](./docs/exercises/06-user-city.md) |
| 07  | タグの差分取得（イミュータブル）    | [07-get-new-tags](./docs/exercises/07-get-new-tags.md) |
| 08  | オブジェクトの部分更新             | [08-update-profile](./docs/exercises/08-update-profile.md) |
| 09  | `map` によるデータ整形            | [09-extract-names](./docs/exercises/09-extract-names.md) |
| 10  | `filter` による条件抽出           | [10-get-adults](./docs/exercises/10-get-adults.md) |

---

## 🧪 テストの実行方法

以下のコマンドで、任意の問題に対応するテストを実行できます。

```bash
# 全てのテスト
bun test
# 任意のテスト
bun test tests/01-hello-world.test.ts
```

---

## 📂 Next.jsセクション

この後は、`Lesson1`〜`Lesson7`として、Next.jsによるページ実装演習を進めていきます。  
（※順次追加予定）

---
