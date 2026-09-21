import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";
import { Stack } from "./Stack";

const meta = {
	args: {
		children: "ボタン",
		size: "md",
		variant: "outline"
	},
	argTypes: {
		size: {
			control: "radio",
			options: ["md", "lg", "xl"],
			table: { defaultValue: { summary: "md" } }
		},
		variant: {
			control: "radio",
			options: ["outline", "solid", "plain"],
			table: { defaultValue: { summary: "solid" } }
		}
	},
	component: Button,
	parameters: {
		docs: {
			description: {
				component:
					"クリック操作用のボタン。`variant` で見た目(outline / solid / plain)を切り替える。"
			}
		}
	},
	tags: ["autodocs"],
	title: "UI/Core/Button"
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
	name: "バリエーション",
	render: () => (
		<Stack direction="horizontal" gapSize="xl">
			<>
				{(["outline", "solid", "plain"] as const).map((variant) => (
					<Button key={variant} variant={variant}>
						{variant}
					</Button>
				))}
			</>
		</Stack>
	)
};
