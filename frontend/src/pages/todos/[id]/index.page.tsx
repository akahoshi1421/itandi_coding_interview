import { Button } from "../../../components/ui/core/Button";
import { Input } from "../../../components/ui/core/Input";
import { InputDate } from "../../../components/ui/core/InputDate";
import { Stack } from "../../../components/ui/core/Stack";
import { Tag } from "../../../components/ui/core/Tag";
import { TextArea } from "../../../components/ui/core/TextArea";
import { COLORS } from "../../../consts/colors";

export default function Page() {
	return (
		<Stack
			direction="vertical"
			gapSize="2xl"
			style={{ padding: "20px", width: "100%" }}
		>
			<Stack
				direction="horizontal"
				gapSize="2xl"
				style={{ alignItems: "center", width: "100%" }}
			>
				<Input size="xl" width="60%" />
				<Tag colorPalette={COLORS.red["600"]} size="xl">
					高: 9.9
				</Tag>
			</Stack>
			<TextArea size="xl" style={{ minHeight: "250px", width: "80%" }} />
			<InputDate size="xl" width="60%" />
			<Stack direction="horizontal" style={{ alignItems: "center" }}>
				<Button size="xl" style={{ width: "150px" }} variant="outline">
					削除
				</Button>
				<Button size="xl" style={{ width: "150px" }}>
					変更
				</Button>
			</Stack>
		</Stack>
	);
}
