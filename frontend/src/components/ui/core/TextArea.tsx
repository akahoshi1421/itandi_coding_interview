import type { TextareaHTMLAttributes } from "react";
import { INPUT_DEFAULT_STYLE, INPUT_INVALID_STYLE, INPUT_SIZE } from "./Input";

const TEXT_AREA_DEFAULT_STYLE = INPUT_DEFAULT_STYLE;

const TEXT_AREA_INVALID_STYLE = INPUT_INVALID_STYLE;

const TEXT_AREA_SIZE = INPUT_SIZE;

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
	invalid?: boolean;
	size?: "md" | "lg" | "xl";
};

export function TextArea({ invalid, size, ...props }: TextAreaProps) {
	return (
		<textarea
			aria-invalid={invalid}
			css={{
				...TEXT_AREA_DEFAULT_STYLE,
				...(invalid && TEXT_AREA_INVALID_STYLE),
				...TEXT_AREA_SIZE[size ?? "md"]
			}}
			{...props}
		/>
	);
}
