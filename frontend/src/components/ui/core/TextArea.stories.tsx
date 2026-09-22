import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Stack } from "./Stack";
import { TextArea } from "./TextArea";

const meta = {
	args: {
		disabled: false,
		invalid: false,
		onChange: fn(),
		placeholder: "入力してください",
		required: false,
		size: "md"
	},
	argTypes: {
		size: {
			control: "radio",
			options: ["md", "lg", "xl"],
			table: { defaultValue: { summary: "md" } }
		}
	},
	component: TextArea,
	parameters: {
		docs: {
			description: {
				component:
					"複数行テキスト入力。`size` で大きさ、`invalid` でエラー状態を表す。`value` と `onChange` で制御コンポーネントとして使う。"
			}
		}
	},
	tags: ["autodocs"],
	title: "UI/Core/TextArea"
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
	name: "サイズ",
	render: () => (
		<Stack direction="vertical" gapSize="lg">
			<>
				{(["md", "lg", "xl"] as const).map((size) => (
					<TextArea key={size} placeholder={size} size={size} />
				))}
			</>
		</Stack>
	)
};

export const States: Story = {
	name: "状態",
	render: () => (
		<Stack direction="vertical" gapSize="lg">
			<>
				<TextArea placeholder="通常" />
				<TextArea invalid placeholder="エラー" value="不正な値" />
				<TextArea disabled placeholder="無効" />
			</>
		</Stack>
	)
};
