# README (to 候補者様)

こちらはフロントエンドエンジニア用のREADMEになります。

以下の要件に従って、TODOリストアプリケーションを作成してください。

## 1. アプリケーションの概要

基本的なCRUD機能を持つTODOリストを作成してください。また、**候補者が思う「Crazyな機能」を必ず1つ以上**盛り込んでください。

### 機能要件

- TODOは以下のプロパティを**必ず**持ってください（機能追加のためにプロパティを足すことは可能です）
  - `id`: TODOを一意に識別できる値
  - `title`: TODOのタイトル
  - `content`: TODOの詳細
  - `completed`: 完了状態
  - `createdAt`: 作成日時
  - `updatedAt`: 更新日時（作成時は作成日時と同じ）
- 画面からTODOの作成、表示、更新、削除を行えるようにしてください
- 「Crazyな機能」はイタンジが大事にしている「それはCrazyか？」をもじったお題であり、機能のCrazyさ（奇抜さ）は評価対象ではありません

### 技術（コーディング）要件

- Pages Routerで実装してください
- 以下のAPIを用意していますが、必要であれば修正・拡張していただいて構いません
  - `GET /api/todos`: すべてのTODOを取得
  - `POST /api/todos`: TODOを追加
  - `GET /api/todos/[id]`: 特定のTODOを取得
  - `PATCH /api/todos/[id]`: 特定のTODOを修正
  - `DELETE /api/todos/[id]`: 特定のTODOを削除
- CSSの基礎実装力を確認したいため、以下の制約を設けます
  - **NG**: Tailwind CSSなどのUtility Firstフレームワーク、Bootstrap、MUIなどのUIコンポーネントライブラリの使用は**不可**とします。
  - **OK**: フレームワークやUIコンポーネントライブラリに依存しない手法（CSS Modules, Emotion, styled-componentsなど）を使用してください。
  - **補足**: デザインの美しさは評価対象ではありませんが、レイアウト崩れがなく、操作可能な状態にしてください
- 以下が正常終了することを確認してください
  - `pnpm biome`
  - `pnpm build`
  - `pnpm eslint`
  - `pnpm tsc`
- BiomeやESLintのルールを変更することは**禁止**します
  - インラインでのdisableは許可しますが、**必ず**disableした理由をコメントで書いてください
- 必要であればパッケージを追加してください

## 2. 生成AIの利用について

- 生成AI（ChatGPT, GitHub Copilot等）の使用は**許可**します
- ただし、後述するREADME.mdにて、どの部分を自身で実装し、どの部分をAIに任せたか（またはAIの支援を受けたか）を明確に記載してください

## 3. 提出物・ドキュメント

- ソースコードのリポジトリ（GitHub等）を共有いただくか、Zipファイル等で提出してください
- 以下を埋めるようにしてください

---

## 提出物の説明

アプリケーション名: Jev Jam

TODOのタイトルと説明, 期限を入力すると、その内容を元にAI(Jev)が優先度をスコアリングし、どのタスクから手をつけるべきか判断を容易にするようにしたアプリケーション。

### Crazyな機能の説明

TODOの優先度をAI(Jev)に判断させるようにした。
TODOリストは一定以上詰め込みすぎると混乱し、どこから手をつけていいのかわからなくなる。よって優先度(1.0 ~ 9.9までの数値)をつけ、「高 (7.0 ~ 9.9)」「中 (4.0 ~ 6.9)」「低 (1.0 ~ 3.9)」で分類しようと考えた。

ただ、いちいち自分で優先度を数値で考えるのは大変なので、Jevに該当TODOの「タイトル」「内容」「期限」を判断材料に自動でスコアリングをさせる仕組みを構築した。

※ Jevは最近発表されたLLMとは異なる概念のAIであり、対人向けではなく、対システム向けの仕組みとなっている。具体的にはなんらかの文章をJevに投げると「その選択肢」と「その確率」を文章ではなく数値で返してくれる。(つまり賢いif文的な概念) 詳細: https://speakerdeck.com/minorun365/konwadai-no-ai-jev-tte-nani-uchuu-saisoku-de-manabu-kai

### 技術選定の理由

- @emotion/react => CSSのスタイルに利用したかったため。完全バニラで書くことも考えたが、バニラを踏襲しつつanimationや擬似要素のスタイルを容易に書けるので採用。
- @tanstack/react-form, zod => フォームの管理に利用したかったため。react-hook-formと迷ったが、react-compilerとの相性が悪いためこちらを採用。
- @tanstack/react-query => APIクライアントのキャッシュ管理に利用。
- @typesafe-ai/sdk => TODO優先度をAI(Jev)に判断させるためのSDKライブラリ
- date-fns => 日付のフォーマットに利用したかったため。
- jotai, jotai-family, jotai-tanstack-query => グローバルステートの管理として採用。また、jotaiを利用するとget関数で別のstateを引き継げるためuseEffectを書く機会が減り、健全性が上がるため採用。
- storybook => デザインをごちゃつかせたくなかったため簡易デザインシステムを作りたかった。Buttonなどのcore系のUIはここで管理。
- vitest, testing-library, msw => フロントエンドのテストを書きたかったので利用。
- babel-plugin-react-compiler => Reactの軽減化のため導入。必要に応じて自動でメモ化されるので、導入するだけ損はないと思い導入。next.config.tsの編集理由もこれの導入のため。
- husky, lint-staged => 開発体験向上のため。commit時にpre-commitフックによってリンターチェックやフォーマットを行わせる。

### AI活用の範囲

JSXの組み立て、CSSは全て自力で実装。これは「CSSの基礎実装力を確認したい」という旨がREADMEにあったため。
また、技術選定は全て自分が考えている。

ロジック、テスト、stories.tsxの組み立て、ciに関してはAI(Claude Code)が実装。ただし、実装方針は私が指示。(「新規TODOを登録したあとに全件fetchは気持ちが良くないので、jotaiで一覧をstateで管理し、jotaiのgetter, setterを利用して追加分をatomに詰め込むように実装して欲しい」「vitestを書くときはhooksのテストというよりはできるだけユーザに近いUI操作のテストを書き、describeやitは実装用語を極力使わず、AAAを意識して書いて欲しい」等)
また、PRを投げさせたあと私がレビューをし、必要に応じてAIに修正させるようにした。

commitメッセージ, PRの文章に関してはAIが記載。

### 作業時間

3営業日

### 環境構築

1. `pnpm install --frozen-lockfile`を実行
2. `.env.example`をもとに`.env`ファイルを作成
3. JevのAPI_KEYを作成し、登録
