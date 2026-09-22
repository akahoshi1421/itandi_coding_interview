import type { CSSObject } from "@emotion/react";
import type { COLORS } from "../../../consts/colors";
import { FONT_SIZE } from "../../../consts/fontSize";

const TAG_DEFAULT_STYLE: CSSObject = {
	borderRadius: "4px",
	color: "white",
	display: "inline-block"
};

const TAG_SIZE: Record<"md" | "lg" | "xl", CSSObject> = {
	"lg": {
		fontSize: FONT_SIZE.lg,
		padding: "4px 12px"
	},
	"md": {
		fontSize: FONT_SIZE.md,
		padding: "2px 8px"
	},
	"xl": {
		fontSize: FONT_SIZE.xl,
		padding: "6px 16px"
	}
};

type TagProps = {
	children: string;
	colorPalette: (typeof COLORS)["red" | "yellow" | "green" | "gray"][
		| 300
		| 400
		| 500
		| 600
		| 700];
	size?: keyof typeof TAG_SIZE;
};

export function Tag({ children, colorPalette, size }: TagProps) {
	return (
		<span
			css={{
				...TAG_DEFAULT_STYLE,
				...TAG_SIZE[size ?? "md"],
				background: colorPalette
			}}
		>
			{children}
		</span>
	);
}
