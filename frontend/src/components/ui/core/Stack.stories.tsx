import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Stack } from "./Stack";

const items = (
	<>
		<div>1</div>
		<div>2</div>
		<div>3</div>
	</>
);

const meta = {
	args: {
		children: items,
		direction: "vertical",
		gapSize: "md"
	},
	argTypes: {
		children: { control: false },
		direction: { control: "radio", options: ["vertical", "horizontal"] },
		gapSize: {
			control: "radio",
			options: ["xs", "sm", "md", "lg", "xl", "2xl"]
		}
	},
	component: Stack,
	parameters: {
		docs: {
			description: {
				component:
					"子要素を flex で並べるレイアウト用コンポーネント。`direction` で並べる向き、`gapSize` で要素間の余白(xs〜2xl)を指定する。"
			}
		}
	},
	tags: ["autodocs"],
	title: "UI/Core/Stack"
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Directions: Story = {
	name: "向き",
	render: () => (
		<Stack direction="horizontal" gapSize="2xl">
			<>
				{(["vertical", "horizontal"] as const).map((direction) => (
					<div key={direction}>
						<p>{direction}</p>
						<Stack direction={direction}>{items}</Stack>
					</div>
				))}
			</>
		</Stack>
	)
};

export const GapSizes: Story = {
	name: "余白",
	render: () => (
		<Stack direction="horizontal" gapSize="2xl">
			<>
				{(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((gapSize) => (
					<div key={gapSize}>
						<p>{gapSize}</p>
						<Stack direction="vertical" gapSize={gapSize}>
							{items}
						</Stack>
					</div>
				))}
			</>
		</Stack>
	)
};
