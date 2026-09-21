import type { CSSObject } from "@emotion/react";
import { COLORS } from "../../../consts/colors";
import { FONT_SIZE } from "../../../consts/fontSize";

const BUTTON_DEFAULT_STYLE: CSSObject = {
	"&:hover": { opacity: 0.7 },
	borderStyle: "solid",
	color: COLORS.gray["900"],
	cursor: "pointer",
	fontWeight: "500",
	outline: "0px"
};

const BUTTON_SIZE: Record<string, CSSObject> = {
	"lg": {
		borderRadius: "10px",
		fontSize: FONT_SIZE.lg,
		padding: "12px 18px"
	},
	"md": {
		borderRadius: "12px",
		fontSize: FONT_SIZE.md,
		padding: "8px 14px"
	},
	"xl": {
		borderRadius: "14px",
		fontSize: FONT_SIZE.xl,
		padding: "18px 22px"
	}
};

const BUTTON_VARIANT: Record<string, CSSObject> = {
	"outline": {
		"&:hover": {
			"background": COLORS.blue["400"],
			"color": COLORS.gray["50"]
		},
		"background": "transparent",
		"borderColor": COLORS.blue["400"],
		"color": COLORS.blue["800"]
	},
	"plain": {
		"background": "transparent",
		"border": "0",
		"color": COLORS.blue["600"]
	},
	"solid": {
		"background": COLORS.blue["600"],
		"borderWidth": "0",
		color: COLORS.blue["50"]
	}
};

type ButtonProps = {
	children: string;
	size?: "md" | "lg" | "xl";
	variant?: "outline" | "solid" | "plain";
};

export function Button({ children, variant, size }: ButtonProps) {
	return (
		<button
			css={[
				BUTTON_DEFAULT_STYLE,
				BUTTON_SIZE[size ?? "md"],
				BUTTON_VARIANT[variant ?? "solid"]
			]}
		>
			{children}
		</button>
	);
}
