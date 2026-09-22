import { COLORS } from "../consts/colors";

const SHADES = [300, 400, 500, 600, 700] as const;

// 低: 1.0〜3.9 / 中: 4.0〜6.9 / 高: 7.0〜9.9 の各帯(幅2.9)を5等分し、高いほど濃い色にする(0は完了済み)
export const getToDoTagColor = (priority: number) => {
	if (priority === 0) return COLORS.gray["500"];

	const [color, start] =
		priority >= 7
			? (["red", 7] as const)
			: priority >= 4
				? (["yellow", 4] as const)
				: (["green", 1] as const);

	const step = Math.floor((priority - start) / (2.9 / 5));
	const shade = SHADES[Math.min(Math.max(step, 0), SHADES.length - 1)];

	return COLORS[color][shade];
};
