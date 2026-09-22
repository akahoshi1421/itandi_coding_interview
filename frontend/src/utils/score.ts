import { score, TypeSafeClient } from "@typesafe-ai/sdk";
import type { DateString } from "../types";

const client = new TypeSafeClient({
	baseURL: "https://api.typesafe.ai",
	logLevel: "off",
	retry: { maxRetries: 0 }
});

// 0〜9 の10段階(API は null の段階を受け付けないので全段階に説明を付ける)
const questions = {
	priority: score("このTODOはどの程度、緊急かつ重要ですか?", [
		"期限も重要性もなく、やらなくても困らない",
		"気が向いたときにやればよい趣味や雑事",
		"いつか手が空いたときにやればよい",
		"数週間以内にやれば十分な軽いタスク",
		"通常の業務や生活のタスク。期限内に普通に対応する",
		"今週中には終えたい、やや重要なタスク",
		"早めに着手すべき。遅れると周囲や自分に影響が出る",
		"数日以内に対応が必要。遅れると信用や金銭に関わる",
		"今日〜明日中に対応が必要。遅れると実害がある",
		"今すぐ対応しないと重大な損失や障害につながる"
	])
};

type Task = {
	content: string;
	deadline: DateString;
	title: string;
};

// Jev の 0〜9 のスコアを 1.0〜9.9(0.1刻み)の priority に変換する
export const evaluatePriority = async (task: Task) => {
	const { answers } = await client.systemOne({
		model: "jev-latest",
		questions,
		state: { ...task, today: new Date().toISOString().slice(0, 10) }
	});

	return Math.round((1 + (answers.priority.score * 8.9) / 9) * 10) / 10;
};

// 全 TODO の priority を振り直す(期限が近づいたときの再評価用)。完了済みは 0 のまま
export const evaluateAllPriority = <T extends Task & { completed: boolean }>(
	tasks: T[]
) =>
	Promise.all(
		tasks.map(async (task) => ({
			...task,
			priority: task.completed ? 0 : await evaluatePriority(task)
		}))
	);
