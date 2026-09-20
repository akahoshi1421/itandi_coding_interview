import type { CSSProperties, ReactElement } from "react";
import { COLORS } from "../../../consts/colors";

const FONT_SIZE = {
	"2xl": "32px",
	"lg": "14px",
	"md": "12px",
	"sm": "10px",
	"xl": "16px",
	"xs": "8px"
} as const;

type TextProps = {
	as?: "p" | "h1" | "h2" | "h3";
	children: ReactElement;
	fontSize?: keyof typeof FONT_SIZE;
	style?: CSSProperties;
};

const DEFAULT_TEXT_STYLE: CSSProperties = {
	color: COLORS.gray["900"],
	fontFamily: "Inter"
};

export function Text({ fontSize, style, children, as }: TextProps) {
	const Tag = as ?? "p";

	return (
		<Tag
			style={{
				fontSize: FONT_SIZE[fontSize ?? "md"],
				...DEFAULT_TEXT_STYLE,
				...style
			}}
		>
			{children}
		</Tag>
	);
}
