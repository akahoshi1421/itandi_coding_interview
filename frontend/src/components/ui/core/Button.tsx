import type { CSSObject } from "@emotion/react";
import type { ButtonHTMLAttributes } from "react";
import { COLORS } from "../../../consts/colors";
import { FONT_SIZE } from "../../../consts/fontSize";

const BUTTON_DEFAULT_STYLE: CSSObject = {
	"&:disabled": {
		"&:hover": {
			background: COLORS.gray["300"],
			borderColor: COLORS.gray["300"]
		},
		background: COLORS.gray["300"],
		borderColor: COLORS.gray["300"],
		color: "white"
	},
	"&:hover": { opacity: 0.7 },
	borderStyle: "solid",
	color: COLORS.gray["900"],
	cursor: "pointer",
	fontWeight: "500",
	outline: "0px"
};

const BUTTON_SIZE: Record<"lg" | "md" | "xl", CSSObject> = {
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

const BUTTON_VARIANT: Record<"outline" | "plain" | "solid", CSSObject> = {
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
		"borderColor": COLORS.blue["600"],
		color: COLORS.blue["50"]
	}
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: string;
	size?: keyof typeof BUTTON_SIZE;
	variant?: keyof typeof BUTTON_VARIANT;
};

export function Button({ children, variant, size, ...props }: ButtonProps) {
	return (
		<button
			css={[
				BUTTON_DEFAULT_STYLE,
				BUTTON_SIZE[size ?? "md"],
				BUTTON_VARIANT[variant ?? "solid"]
			]}
			type="button"
			{...props}
		>
			{children}
		</button>
	);
}
