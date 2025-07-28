import type { Meta, StoryObj } from "@storybook/react-vite";

import { Radar } from "./Radar.js";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Components/Radar",
	component: Radar,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {},
} satisfies Meta<typeof Radar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
	args: {
		rings: ["discover", "learn", "use"],
		quadrants: ["languages", "frameworks", "tools", "libraries"],
		data: [
			{
				name: "D3",
				quadrant: "libraries",
				ring: "learn",
			},
			{
				name: "TypeScript",
				quadrant: "languages",
				ring: "learn",
			},
			{
				name: "Storybook",
				quadrant: "tools",
				ring: "use",
			},
		],
	},
};

export const WithFiveQuadrants: Story = {
	args: {
		rings: ["adopt", "trial", "assess", "hold"],
		quadrants: ["tools", "techniques", "platforms", "languages", "frameworks"],
		data: [
			{
				name: "D3",
				quadrant: "tools",
				ring: "assess",
			},
			{
				name: "TypeScript",
				quadrant: "languages",
				ring: "trial",
			},
			{
				name: "Storybook",
				quadrant: "tools",
				ring: "adopt",
			},
		],
	},
};

export const CustomFont: Story = {
	args: {
		rings: ["adopt", "trial", "assess", "hold"],
		quadrants: ["tools", "techniques", "platforms", "languages"],
		width: 550,
		data: [
			{
				name: "D3",
				quadrant: "tools",
				ring: "assess",
			},
			{
				name: "TypeScript",
				quadrant: "languages",
				ring: "trial",
			},
			{
				name: "Storybook",
				quadrant: "tools",
				ring: "adopt",
			},
		],
		fontSize: 18,
		itemFontSize: 12,
		fontFamily: "fantasy",
	},
};

export const CustomMargin: Story = {
	args: {
		margin: 10,
		rings: ["adopt", "trial", "assess", "hold"],
		quadrants: ["tools", "techniques", "platforms", "languages"],
		width: 550,
		data: [
			{
				name: "D3",
				quadrant: "tools",
				ring: "assess",
			},
			{
				name: "TypeScript",
				quadrant: "languages",
				ring: "trial",
			},
			{
				name: "Storybook",
				quadrant: "tools",
				ring: "adopt",
			},
		],
	},
};

export const ColorSchema1: Story = {
	args: {
		rings: ["adopt", "trial", "assess", "hold"],
		quadrants: [
			"tools",
			"techniques",
			"platforms",
			"languages",
			"frameworks",
			"methodologies",
		],
		data: [
			{
				name: "D3",
				quadrant: "tools",
				ring: "assess",
			},
			{
				name: "TypeScript",
				quadrant: "languages",
				ring: "trial",
			},
			{
				name: "Storybook",
				quadrant: "tools",
				ring: "adopt",
			},
		],
		colorScaleIndex: 1,
	},
};

export const LabelsOnlyFirstRim: Story = {
	args: {
		rings: ["adopt", "trial", "assess", "hold"],
		quadrants: ["tools", "techniques", "platforms", "languages"],
		width: 550,
		quadrantsConfig: {
			showOnlyFirstQuadrantLabels: true,
			textYOffset: -5,
		},
		data: [
			{
				name: "D3",
				quadrant: "tools",
				ring: "assess",
			},
			{
				name: "TypeScript",
				quadrant: "languages",
				ring: "trial",
			},
			{
				name: "Storybook",
				quadrant: "tools",
				ring: "adopt",
			},
		],
	},
};
