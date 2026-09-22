import { Stack } from "../../components/ui/core/Stack";
import { Text } from "../../components/ui/core/Text";
import { useTodos } from "../_hooks/useTodos";
import { OneClusterContent } from "./contents/OneClusterContent";

export function Contents() {
	const { data, error, isPending } = useTodos();

	if (isPending) {
		return <Text>読み込み中...</Text>;
	}

	if (error) {
		return <Text>TODOの取得に失敗しました。</Text>;
	}

	return (
		<Stack direction="vertical" gapSize="xl" style={{ width: "90%" }}>
			<OneClusterContent contents={data.high} priorityTitle="高" />
			<OneClusterContent contents={data.middle} priorityTitle="中" />
			<OneClusterContent contents={data.low} priorityTitle="低" />
			<OneClusterContent contents={data.done} priorityTitle="完了" />
		</Stack>
	);
}
