import type { CSSProperties, LabelHTMLAttributes, ReactNode } from "react";
import { COLORS } from "../../../consts/colors";
import { FONT_SIZE } from "../../../consts/fontSize";

// LabelHTMLAttributes は HTMLAttributes に htmlFor / form を足したものなので p / h1〜h3 にもそのまま使える
type TextProps = LabelHTMLAttributes<HTMLElement> & {
	as?: "p" | "label" | "h1" | "h2" | "h3";
	children: ReactNode;
	fontSize?: keyof typeof FONT_SIZE;
	style?: CSSProperties;
};

const DEFAULT_TEXT_STYLE: CSSProperties = {
	color: COLORS.gray["900"],
	fontFamily: "Inter",
	margin: 0
};

export function Text({ fontSize, style, children, as, ...props }: TextProps) {
	const Tag = as ?? "p";

	return (
		<Tag
			style={{
				fontSize: FONT_SIZE[fontSize ?? "md"],
				...DEFAULT_TEXT_STYLE,
				...style
			}}
			{...props}
		>
			{children}
		</Tag>
	);
}
