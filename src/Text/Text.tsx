import { useContext } from "react";
import { ThemeContext } from "../theme-context.js";
import TextWrapper from "./Text.style.js";

export interface TextProps {
	name: string;
	dx?: string | number;
	dy?: string | number;
}

export function Text(props: TextProps) {
	//context variables
	const { fontSize, fontFamily } = useContext(ThemeContext);

	return (
		<TextWrapper
			className={"quadrant"}
			fontSize={fontSize}
			fontFamily={fontFamily}
			dx={props.dx}
			dy={props.dy}
		>
			{props.name}
		</TextWrapper>
	);
}
