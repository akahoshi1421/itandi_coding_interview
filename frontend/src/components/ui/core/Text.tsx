import type { CSSProperties, ReactElement } from "react";
import { COLORS } from "../../../consts/colors";
import { FONT_SIZE } from "../../../consts/fontSize";

type TextProps = {
	as?: "p" | "h1" | "h2" | "h3";
	children: ReactElement | string;
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
