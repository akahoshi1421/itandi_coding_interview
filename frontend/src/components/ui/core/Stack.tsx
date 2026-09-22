import type { CSSProperties, ReactElement } from "react";

const GAP_SIZE = {
	"2xl": "20px",
	"lg": "8px",
	"md": "6px",
	"sm": "4px",
	"xl": "10px",
	"xs": "2px"
} as const;

type StackProps = {
	children: ReactElement[] | ReactElement;
	direction: "vertical" | "horizontal";
	gapSize?: keyof typeof GAP_SIZE;
	style?: CSSProperties;
};

export function Stack({ children, direction, gapSize, style }: StackProps) {
	const flexDirection = direction === "horizontal" ? "row" : "column";

	return (
		<div
			style={{
				alignItems: "flex-start",
				display: "flex",
				flexDirection,
				flexWrap: "wrap",
				gap: GAP_SIZE[gapSize ?? "md"],
				...style
			}}
		>
			{children}
		</div>
	);
}
