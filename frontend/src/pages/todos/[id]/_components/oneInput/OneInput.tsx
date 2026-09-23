import type { ReactNode } from "react";
import { Stack } from "../../../../../components/ui/core/Stack";
import { Text } from "../../../../../components/ui/core/Text";
import { COLORS } from "../../../../../consts/colors";

type OneInputProps = {
	children?: ReactNode;
	invalid?: boolean;
	invalidMessage?: string;
};

export function OneInput({ children, invalid, invalidMessage }: OneInputProps) {
	return (
		<Stack direction="vertical" gapSize="sm" style={{ width: "90%" }}>
			{children}
			{invalid ? (
				<Text fontSize="sm" style={{ color: COLORS.red["500"] }}>
					{invalidMessage}
				</Text>
			) : (
				""
			)}
		</Stack>
	);
}
