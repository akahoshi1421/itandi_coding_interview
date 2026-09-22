import type { ReactNode } from "react";
import { Stack } from "../../../components/ui/core/Stack";
import { Text } from "../../../components/ui/core/Text";
import { COLORS } from "../../../consts/colors";

type OneInputProps = {
	children: ReactNode;
	invalid?: boolean;
	invalidMessage?: string;
	itemId: string;
	itemTitle: string;
};

export function OneInput({
	children,
	invalid,
	invalidMessage,
	itemId,
	itemTitle
}: OneInputProps) {
	return (
		<Stack
			direction="horizontal"
			style={{ alignItems: "center", width: "100%" }}
		>
			<Text as="label" fontSize="xl" htmlFor={itemId} style={{ width: "80px" }}>
				{itemTitle}:
			</Text>
			<Stack direction="vertical" gapSize="sm" style={{ width: "90%" }}>
				{children}
				{invalid ? (
					<Text color={COLORS.red["500"]} fontSize="sm">
						{invalidMessage}
					</Text>
				) : (
					""
				)}
			</Stack>
		</Stack>
	);
}
