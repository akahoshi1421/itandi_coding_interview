import { keyframes } from "@emotion/react";
import { COLORS } from "../../consts/colors";
import { Stack } from "./core/Stack";
import { Text } from "./core/Text";

type ToastProps = {
	message: string;
	state: "success" | "error";
};

const toastAnimation = keyframes`
    0% {
        transform: translateY(0);
    }

    20%, 80% {
        transform: translateY(-150px);
    }

    100% {
        transform: translateY(0);
    }
`;

export function Toast({ state, message }: ToastProps) {
	return (
		<div
			css={{
				animation: `${toastAnimation} 3s ease-in`,
				bottom: "-100px",
				position: "fixed",
				right: "20px"
			}}
		>
			<Stack
				direction="vertical"
				gapSize="xl"
				style={{
					background: COLORS[state === "success" ? "green" : "red"]["500"],
					borderRadius: "10px",
					padding: "10px 20px"
				}}
			>
				<Text fontSize="lg" style={{ color: "white" }}>
					{message}
				</Text>
			</Stack>
		</div>
	);
}
