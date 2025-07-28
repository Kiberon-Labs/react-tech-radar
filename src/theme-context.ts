import { scaleOrdinal } from "d3-scale";
import {
	schemeAccent,
	schemeCategory10,
	schemeDark2,
	schemePaired,
	schemeSet1,
	schemeSet2,
	schemeSet3,
} from "d3-scale-chromatic";
import * as React from "react";

export const colorScales = [
	{ name: "schemeCategory10" },
	{ name: "schemeAccent" },
	{ name: "schemeDark2" },
	{ name: "schemePaired" },
	{ name: "schemeSet1" },
	{ name: "schemeSet2" },
	{ name: "schemeSet3" },
];
const d3Scales = {
	schemeCategory10,
	schemeAccent,
	schemeDark2,
	schemePaired,
	schemeSet1,
	schemeSet2,
	schemeSet3,
};

//set color scheme by index
//chose from 0 to 6
const DEFAULT_FONT_SIZE = 12;
const DEFAULT_COLOR_SCALE = getColorScale(5);
const DEFAULT_FONT_FAMILY = "Arial, Helvetica, sans-serif";

type ColorScaler = (index: number) => string;

export function getColorScale(colorScaleIndex: number) {
	const scaleName = colorScales[colorScaleIndex]?.name as keyof typeof d3Scales;
	const colorRange = d3Scales[scaleName];
	return scaleOrdinal(colorRange as string[]) as unknown as ColorScaler;
}

export type QuadrantsConfigType = {
	textMargin?: number;
	textYOffset?: number;
	showOnlyFirstQuadrantLabels?: boolean;
};

export type ThemeContextType = {
	colorScale: ColorScaler;
	fontFamily: string;
	fontSize: number;
	itemFontSize: number;
	quadrantsConfig: QuadrantsConfigType;
};

export const ThemeContext = React.createContext<ThemeContextType>({
	colorScale: DEFAULT_COLOR_SCALE,
	fontFamily: DEFAULT_FONT_FAMILY,
	fontSize: DEFAULT_FONT_SIZE,
	itemFontSize: DEFAULT_FONT_SIZE,
	quadrantsConfig: {
		textMargin: 5,
		textYOffset: 0,
		showOnlyFirstQuadrantLabels: true,
	},
});
