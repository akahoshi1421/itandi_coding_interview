import type { CSSObject } from "@emotion/react";
import type { InputHTMLAttributes } from "react";
import { COLORS } from "../../../consts/colors";

const CHECKBOX_DEFAULT_STYLE: CSSObject = {
	"&:checked": {
		"&:after": {
			background: COLORS.blue["100"],
			content: "''",
			height: "2px",
			left: "calc(35% - 3px)",
			position: "absolute",
			top: "calc(67% - 1px)",
			transform: "rotate(45deg)",
			width: "6px"
		},
		"&:before": {
			background: COLORS.blue["100"],
			content: "''",
			height: "2px",
			left: "calc(64% - 7.5px)",
			position: "absolute",
			top: "calc(50% - 1px)",
			transform: "rotate(-45deg)",
			width: "15px"
		},
		background: COLORS.blue["400"],
		position: "relative"
	},
	"&:hover": {
		opacity: "0.8"
	},
	appearance: "none",
	border: "2px solid",
	borderColor: COLORS.blue["400"],
	borderRadius: "4px",
	cursor: "pointer",
	height: "30px",
	width: "30px"
};

type CheckBoxProps = InputHTMLAttributes<HTMLInputElement>;

export function CheckBox(props: CheckBoxProps) {
	return (
		<input css={{ ...CHECKBOX_DEFAULT_STYLE }} type="checkbox" {...props} />
	);
}
