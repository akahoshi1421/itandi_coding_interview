import type { CSSObject } from "@emotion/react";
import type { InputHTMLAttributes } from "react";
import { COLORS } from "../../../consts/colors";
import { FONT_SIZE } from "../../../consts/fontSize";

export const INPUT_DEFAULT_STYLE: CSSObject = {
	"&:disabled": {
		background: COLORS.gray["300"],
		outlineColor: COLORS.gray["300"]
	},
	"&:focus": {
		outline: "2px solid",
		outlineColor: COLORS.blue["700"]
	},
	border: "0",
	borderRadius: "2px",
	outline: "1px solid",
	outlineColor: COLORS.blue["400"]
};

export const INPUT_INVALID_STYLE: CSSObject = {
	outline: "2px solid",
	outlineColor: COLORS.red["400"]
};

export const INPUT_SIZE: Record<string, CSSObject> = {
	"lg": {
		fontSize: FONT_SIZE.lg,
		padding: "15px 10px"
	},
	"md": {
		fontSize: FONT_SIZE.md,
		padding: "10px 15px"
	},
	"xl": {
		fontSize: FONT_SIZE.xl,
		padding: "20px 25px"
	}
};

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
	invalid?: boolean;
	size?: "md" | "lg" | "xl";
	width?: string;
};

export function Input({ invalid, size, width, ...props }: InputProps) {
	return (
		<input
			aria-invalid={invalid}
			css={{
				...INPUT_DEFAULT_STYLE,
				...(invalid && INPUT_INVALID_STYLE),
				...INPUT_SIZE[size ?? "md"],
				width
			}}
			type="text"
			{...props}
		/>
	);
}
