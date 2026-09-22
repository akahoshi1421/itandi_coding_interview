import { Stack } from "../../../components/ui/core/Stack";
import { Tag } from "../../../components/ui/core/Tag";
import { Text } from "../../../components/ui/core/Text";
import { COLORS } from "../../../consts/colors";
import type { TODO } from "../../../types";
import { getClusterTag } from "../../../utils/getClusterTag";
import { OneToDo } from "./oneClusterContent/OneToDo";

type OneClusterontentProps = {
	contents: TODO[];
	priorityTitle: "高" | "中" | "低" | "完了";
};

export function OneClusterContent({
	contents,
	priorityTitle
}: OneClusterontentProps) {
	const clusterTagColor = getClusterTag(priorityTitle);

	return (
		<Stack direction="vertical" gapSize="lg" style={{ width: "100%" }}>
			<Tag colorPalette={COLORS[clusterTagColor][700]} size="lg">
				{priorityTitle}
			</Tag>
			<Stack
				direction="horizontal"
				gapSize="lg"
				style={{
					flexWrap: "nowrap",
					overflowX: "scroll",
					scrollbarWidth: "none",
					width: "100%"
				}}
			>
				{contents.length > 0 ? (
					contents.map((content) => <OneToDo {...content} key={content.id} />)
				) : (
					<Text fontSize="xl">TODOタスクはありません。</Text>
				)}
			</Stack>
		</Stack>
	);
}
