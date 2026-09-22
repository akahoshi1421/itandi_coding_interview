import { Button } from "../../components/ui/core/Button";
import { Input } from "../../components/ui/core/Input";
import { InputDate } from "../../components/ui/core/InputDate";
import { Stack } from "../../components/ui/core/Stack";
import { Text } from "../../components/ui/core/Text";
import { TextArea } from "../../components/ui/core/TextArea";

export function RegistForm() {
	return (
		<Stack
			direction="vertical"
			gapSize="xl"
			style={{
				background: "white",
				borderRadius: "10px",
				padding: "20px",
				width: "85%"
			}}
		>
			<Stack direction="vertical" gapSize="lg">
				<Stack direction="horizontal" style={{ alignItems: "center" }}>
					<Text as="label" fontSize="xl" style={{ width: "80px" }}>
						タイトル:
					</Text>
					<Input
						placeholder="TODOタイトル"
						size="lg"
						width="calc(100% - 150px)"
					/>
				</Stack>
				<Stack direction="horizontal" style={{ alignItems: "center" }}>
					<Text as="label" fontSize="xl" style={{ width: "80px" }}>
						内容:
					</Text>
					<TextArea
						placeholder="TODOの内容"
						size="lg"
						style={{
							maxWidth: "calc(100% - 200px)",
							minWidth: "calc(100% - 150px)"
						}}
					/>
				</Stack>
				<Stack direction="horizontal" style={{ alignItems: "center" }}>
					<Text as="label" fontSize="xl" style={{ width: "80px" }}>
						期日:
					</Text>
					<InputDate size="lg" width="calc(100% - 150px)" />
				</Stack>
			</Stack>
			<Stack direction="horizontal" style={{ justifyContent: "flex-end" }}>
				<Button size="lg" style={{ width: "100px" }} type="submit">
					登録
				</Button>
			</Stack>
		</Stack>
	);
}
