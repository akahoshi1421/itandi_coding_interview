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
		<Stack
			direction="vertical"
			gapSize="xl"
			style={{
				animation: `${toastAnimation} 3s ease-in`,
				background: COLORS[state === "success" ? "green" : "red"]["500"],
				borderRadius: "10px",
				bottom: "-100px",
				padding: "10px 20px",
				position: "fixed",
				right: "20px"
			}}
		>
			<Text fontSize="lg" style={{ color: "white" }}>
				{message}
			</Text>
		</Stack>
	);
}
