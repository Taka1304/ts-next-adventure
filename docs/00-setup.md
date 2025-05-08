# 環境構築手順

## ✅ 前提

- Node.js（推奨: `>=18`）
- [bun](https://bun.sh) がインストールされていること（`bun --version` で確認）
  - インストールしていない場合，`npm install -g bun` でインストール

---

## 🚀 セットアップ手順

### 1. リポジトリを Fork

GitHub のリポジトリ画面から `Fork` ボタンを押して、自分のアカウントにコピーしてください。

### 2. ローカルに Clone

```bash
git clone git@github.com:<ユーザー名>/<作成したリポジトリ名>.git
cd このリポジトリ名
```

### 3. オリジナルリポジトリを upstream に追加（任意）

```bash
git remote add upstream git@github.com:Taka1304/ts-next-adventure.git
```

これで、元リポジトリの更新を取り込めるようになります。

### 4. 依存パッケージのインストール

```bash
bun install
```

### 5. 演習開始

以下のコマンドで任意の問題のテストを実行してみましょう。

```bash
bun test tests/01-hello-world.test.ts
```

テストが通れば次の演習へ進んでOKです！

---

## 💡 Tips

- `git pull upstream main` で元リポジトリの更新を取り込むことができます。

---
