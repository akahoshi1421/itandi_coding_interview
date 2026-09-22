import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Stack } from "./Stack";
import { Text } from "./Text";

const meta = {
	args: {
		as: "p",
		children: <>テキスト</>,
		fontSize: "md"
	},
	argTypes: {
		as: { control: "radio", options: ["p", "h1", "h2", "h3"] },
		children: { control: false },
		fontSize: {
			control: "radio",
			options: ["xs", "sm", "md", "lg", "xl", "2xl"]
		}
	},
	component: Text,
	parameters: {
		docs: {
			description: {
				component:
					"文字を表示するコンポーネント。`as` で出力するタグ(p / h1〜h3)、`fontSize` で文字サイズ(xs〜2xl)を指定する。"
			}
		}
	},
	tags: ["autodocs"],
	title: "UI/Core/Text"
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const FontSizes: Story = {
	name: "文字サイズ",
	render: () => (
		<Stack direction="horizontal" gapSize="lg">
			<>
				{(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((fontSize) => (
					<Text fontSize={fontSize} key={fontSize}>
						<>{fontSize} テキスト</>
					</Text>
				))}
			</>
		</Stack>
	)
};

export const Tags: Story = {
	name: "タグ",
	render: () => (
		<Stack direction="horizontal" gapSize="lg">
			<>
				{(["h1", "h2", "h3", "p"] as const).map((as) => (
					<Text as={as} key={as}>
						<>{as} で表示</>
					</Text>
				))}
			</>
		</Stack>
	)
};
