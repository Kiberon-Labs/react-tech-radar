import { rgb as d3rgb } from "d3-color";
import { arc as d3arc } from "d3-shape";
import { useCallback, useContext } from "react";
import { ThemeContext } from "../theme-context.js";

export interface PathProps {
	quadIndex: number;
	ringIndex: number;
	ringWidth: number;
	ringsLength: number;
	quad_angle: number;
	outerRadius: number;
	innerRadius: number;
	title?: string;
}

export function Path(props: PathProps) {
	//context variables
	const { fontSize, fontFamily, colorScale } = useContext(ThemeContext);
	const {
		quadIndex,
		ringIndex,
		ringsLength,
		outerRadius,
		innerRadius,
		ringWidth,
		quad_angle,
	} = props;

	const rgb = d3rgb(colorScale(quadIndex));
	const fill = rgb.brighter((ringIndex / ringsLength) * 0.9);
	const uniquePathId = `${quadIndex}-${ringIndex}`;

	const archFunction = useCallback(() => {
		return d3arc()
			.outerRadius(() => {
				return outerRadius * ringWidth;
			})
			.innerRadius(() => {
				return innerRadius * ringWidth;
			})
			.startAngle(() => {
				return Math.PI / 2;
			})
			.endAngle(() => {
				return quad_angle + Math.PI / 2;
			})(null as any) as string;
	}, [outerRadius, innerRadius, ringWidth, quad_angle]);

	return (
		<g>
			<path
				id={uniquePathId}
				className={"quadrant"}
				d={archFunction()}
				fill={fill.toString()}
			></path>

			{props.title && (
				<text
					dx={props.ringWidth / 2}
					fontSize={fontSize}
					fontFamily={fontFamily}
				>
					<textPath href={`#${uniquePathId}`}>{props.title}</textPath>
				</text>
			)}
		</g>
	);
}
