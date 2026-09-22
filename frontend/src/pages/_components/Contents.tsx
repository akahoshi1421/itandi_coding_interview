import { Stack } from "../../components/ui/core/Stack";
import type { TODO } from "../../types";
import { OneClusterContent } from "./contents/OneClusterContent";

const MOCK: Record<"high" | "middle" | "low" | "done", TODO[]> = {
	done: [
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/08/23",
			deadline: "2026/10/08",
			id: crypto.randomUUID(),
			priority: 0,
			title: "PRのレビュー対応",
			updatedAt: "2026/08/26"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/08/19",
			deadline: "2026/09/29",
			id: crypto.randomUUID(),
			priority: 0,
			title: "月次の請求書送付",
			updatedAt: "2026/08/20"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/08/19",
			deadline: "2026/10/14",
			id: crypto.randomUUID(),
			priority: 0,
			title: "ライブラリの脆弱性対応",
			updatedAt: "2026/08/22"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/09",
			deadline: "2026/10/08",
			id: crypto.randomUUID(),
			priority: 0,
			title: "1on1の日程調整",
			updatedAt: "2026/09/09"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/01",
			deadline: "2026/09/26",
			id: crypto.randomUUID(),
			priority: 0,
			title: "リリースノート作成",
			updatedAt: "2026/09/02"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/08/17",
			deadline: "2026/10/13",
			id: crypto.randomUUID(),
			priority: 0,
			title: "CIの実行時間短縮",
			updatedAt: "2026/08/17"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/08/26",
			deadline: "2026/10/14",
			id: crypto.randomUUID(),
			priority: 0,
			title: "会議室の予約",
			updatedAt: "2026/08/29"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/10",
			deadline: "2026/10/20",
			id: crypto.randomUUID(),
			priority: 0,
			title: "チームランチの店決め",
			updatedAt: "2026/09/10"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/08/18",
			deadline: "2026/09/25",
			id: crypto.randomUUID(),
			priority: 0,
			title: "不要なメールの整理",
			updatedAt: "2026/08/18"
		},
		{
			completed: true,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/18",
			deadline: "2026/10/22",
			id: crypto.randomUUID(),
			priority: 0,
			title: "名刺の発注",
			updatedAt: "2026/09/19"
		}
	],
	high: [
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/05",
			deadline: "2026/10/18",
			id: crypto.randomUUID(),
			priority: 9.7,
			title: "ほげ",
			updatedAt: "2026/09/05"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/08/22",
			deadline: "2026/10/08",
			id: crypto.randomUUID(),
			priority: 9.2,
			title: "ふが",
			updatedAt: "2026/08/24"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/08/14",
			deadline: "2026/10/10",
			id: crypto.randomUUID(),
			priority: 9.1,
			title: "ふが",
			updatedAt: "2026/08/15"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/06",
			deadline: "2026/10/09",
			id: crypto.randomUUID(),
			priority: 8.9,
			title: "本番障害の一次対応",
			updatedAt: "2026/09/08"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/20",
			deadline: "2026/10/08",
			id: crypto.randomUUID(),
			priority: 8.6,
			title: "決算資料の提出",
			updatedAt: "2026/09/20"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/03",
			deadline: "2026/10/11",
			id: crypto.randomUUID(),
			priority: 8.3,
			title: "契約書の押印",
			updatedAt: "2026/09/06"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/15",
			deadline: "2026/10/04",
			id: crypto.randomUUID(),
			priority: 7.9,
			title: "採用面接の準備",
			updatedAt: "2026/09/17"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/06",
			deadline: "2026/09/24",
			id: crypto.randomUUID(),
			priority: 7.6,
			title: "サーバー証明書の更新",
			updatedAt: "2026/09/08"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/16",
			deadline: "2026/10/06",
			id: crypto.randomUUID(),
			priority: 7.3,
			title: "顧客への謝罪連絡",
			updatedAt: "2026/09/16"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/14",
			deadline: "2026/10/06",
			id: crypto.randomUUID(),
			priority: 7.0,
			title: "週次レポート作成",
			updatedAt: "2026/09/16"
		}
	],
	low: [
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/16",
			deadline: "2026/10/21",
			id: crypto.randomUUID(),
			priority: 3.9,
			title: "デスク周りの掃除",
			updatedAt: "2026/09/16"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/20",
			deadline: "2026/09/30",
			id: crypto.randomUUID(),
			priority: 3.5,
			title: "技術書を読む",
			updatedAt: "2026/09/21"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/17",
			deadline: "2026/10/06",
			id: crypto.randomUUID(),
			priority: 3.2,
			title: "READMEの誤字修正",
			updatedAt: "2026/09/20"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/08/26",
			deadline: "2026/09/26",
			id: crypto.randomUUID(),
			priority: 2.9,
			title: "ブックマークの整理",
			updatedAt: "2026/08/29"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/08/15",
			deadline: "2026/10/18",
			id: crypto.randomUUID(),
			priority: 2.6,
			title: "ランチの店を探す",
			updatedAt: "2026/08/16"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/03",
			deadline: "2026/09/26",
			id: crypto.randomUUID(),
			priority: 2.3,
			title: "観葉植物に水をやる",
			updatedAt: "2026/09/05"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/01",
			deadline: "2026/09/24",
			id: crypto.randomUUID(),
			priority: 2.0,
			title: "古いブランチの削除",
			updatedAt: "2026/09/03"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/08/25",
			deadline: "2026/09/28",
			id: crypto.randomUUID(),
			priority: 1.7,
			title: "ポッドキャストを聴く",
			updatedAt: "2026/08/25"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/05",
			deadline: "2026/09/24",
			id: crypto.randomUUID(),
			priority: 1.4,
			title: "キーボードの設定変更",
			updatedAt: "2026/09/05"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/17",
			deadline: "2026/10/19",
			id: crypto.randomUUID(),
			priority: 1.0,
			title: "エディタのテーマを変える",
			updatedAt: "2026/09/20"
		}
	],
	middle: [
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/08/20",
			deadline: "2026/10/15",
			id: crypto.randomUUID(),
			priority: 6.8,
			title: "設計書のレビュー",
			updatedAt: "2026/08/21"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/08/16",
			deadline: "2026/10/08",
			id: crypto.randomUUID(),
			priority: 6.5,
			title: "依存パッケージの更新",
			updatedAt: "2026/08/17"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/08/19",
			deadline: "2026/10/17",
			id: crypto.randomUUID(),
			priority: 6.1,
			title: "定例MTGの議事録",
			updatedAt: "2026/08/20"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/12",
			deadline: "2026/10/14",
			id: crypto.randomUUID(),
			priority: 5.8,
			title: "APIのエラーハンドリング改善",
			updatedAt: "2026/09/15"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/08/27",
			deadline: "2026/10/06",
			id: crypto.randomUUID(),
			priority: 5.4,
			title: "テストカバレッジの向上",
			updatedAt: "2026/08/27"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/08/25",
			deadline: "2026/09/24",
			id: crypto.randomUUID(),
			priority: 5.0,
			title: "オンボーディング資料の修正",
			updatedAt: "2026/08/26"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/03",
			deadline: "2026/10/22",
			id: crypto.randomUUID(),
			priority: 4.7,
			title: "Slackの通知設定を見直す",
			updatedAt: "2026/09/05"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/19",
			deadline: "2026/09/29",
			id: crypto.randomUUID(),
			priority: 4.4,
			title: "経費精算",
			updatedAt: "2026/09/20"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/08/26",
			deadline: "2026/09/25",
			id: crypto.randomUUID(),
			priority: 4.2,
			title: "社内勉強会の資料作成",
			updatedAt: "2026/08/26"
		},
		{
			completed: false,
			content:
				"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			createdAt: "2026/09/11",
			deadline: "2026/10/08",
			id: crypto.randomUUID(),
			priority: 4.0,
			title: "開発環境のDockerfile整理",
			updatedAt: "2026/09/12"
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
