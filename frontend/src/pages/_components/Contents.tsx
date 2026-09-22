import { Stack } from "../../components/ui/core/Stack";
import { OneClusterContent } from "./contents/OneClusterContent";

const MOCK = {
	done: [
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 9.4,
			title: "PRのレビュー対応"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 8.8,
			title: "月次の請求書送付"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 8.1,
			title: "ライブラリの脆弱性対応"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 6.6,
			title: "1on1の日程調整"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 5.9,
			title: "リリースノート作成"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 5.2,
			title: "CIの実行時間短縮"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 4.5,
			title: "会議室の予約"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 3.4,
			title: "チームランチの店決め"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 2.7,
			title: "不要なメールの整理"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 1.8,
			title: "名刺の発注"
		}
	],
	high: [
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 9.7,
			title: "ほげ"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 9.2,
			title: "ふが"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 9.1,
			title: "ふが"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 8.9,
			title: "本番障害の一次対応"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 8.6,
			title: "決算資料の提出"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 8.3,
			title: "契約書の押印"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 7.9,
			title: "採用面接の準備"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 7.6,
			title: "サーバー証明書の更新"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 7.3,
			title: "顧客への謝罪連絡"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 7.0,
			title: "週次レポート作成"
		}
	],
	low: [
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 3.9,
			title: "デスク周りの掃除"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 3.5,
			title: "技術書を読む"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 3.2,
			title: "READMEの誤字修正"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 2.9,
			title: "ブックマークの整理"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 2.6,
			title: "ランチの店を探す"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 2.3,
			title: "観葉植物に水をやる"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 2.0,
			title: "古いブランチの削除"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 1.7,
			title: "ポッドキャストを聴く"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 1.4,
			title: "キーボードの設定変更"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 1.0,
			title: "エディタのテーマを変える"
		}
	],
	middle: [
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 6.8,
			title: "設計書のレビュー"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 6.5,
			title: "依存パッケージの更新"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 6.1,
			title: "定例MTGの議事録"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 5.8,
			title: "APIのエラーハンドリング改善"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 5.4,
			title: "テストカバレッジの向上"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 5.0,
			title: "オンボーディング資料の修正"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 4.7,
			title: "Slackの通知設定を見直す"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 4.4,
			title: "経費精算"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 4.2,
			title: "社内勉強会の資料作成"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			id: crypto.randomUUID(),
			priority: 4.0,
			title: "開発環境のDockerfile整理"
		}
	]
};

export function Contents() {
	return (
		<Stack direction="vertical" gapSize="xl" style={{ width: "90%" }}>
			<OneClusterContent contents={MOCK.high} priorityTitle="高" />
			<OneClusterContent contents={MOCK.middle} priorityTitle="中" />
			<OneClusterContent contents={MOCK.low} priorityTitle="低" />
			<OneClusterContent contents={MOCK.done} priorityTitle="完了" />
		</Stack>
	);
}
