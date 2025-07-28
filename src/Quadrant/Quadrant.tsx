/** biome-ignore-all lint/suspicious/noArrayIndexKey : Legacy */
import React, { useCallback, useContext, useMemo } from "react";
import { Item } from "../Item/Item.js";
import { Line } from "../Line/Line.js";
import { Path } from "../Path/Path.js";
import { Text } from "../Text/Text.js";
import { ThemeContext } from "../theme-context.js";
import { QuadrantWrapper } from "./Quadrant.style.js";

export interface QuadrantProps {
	transform: string;
	rotateDegrees: number;
	width: number;
	index: number;
	rings: string[];
	points: Array<{
		id: string;
		name: string;
		x: number;
		y: number;
	}>;
	angle: number;
	name: string;
	radiusDiminish: number;
}

export function Quadrant(props: QuadrantProps) {
	//context variables
	const {
		colorScale,
		quadrantsConfig: { textMargin, textYOffset, showOnlyFirstQuadrantLabels },
	} = useContext(ThemeContext);
	const { rings } = props;

	//optional variables
	const radiusDiminishConstant = props.radiusDiminish;

	const ref = React.createRef<SVGGElement>();
	const ringWidth = props.width / 2;
	const radialAngle = ((2 * Math.PI) / 360) * props.angle;

	const onMouseOver = () => {
		if (ref.current) ref.current.style.opacity = "1.0";
	};

	const onMouseOut = () => {
		if (ref.current) ref.current.style.opacity = "0.7";
	};

	const calculateRadiusDiminish = useCallback(
		(nrOfRings: number) => {
			let max = 1;

			//create the array. each value represents
			//the share of total radius among rings.
			let arr = [1];
			for (let i = 1; i < nrOfRings; i++) {
				max = max * radiusDiminishConstant;
				arr.push(max);
			}

			//calculate total shares of radius
			const sum = arr.reduce((a, b) => a + b);
			arr = arr.map((a) => a / sum);

			//now, each member of the array represent
			//the starting position of ring in the
			//circle
			arr.reverse();
			for (let i = 1; i < nrOfRings; i++) {
				arr[i] = arr[i - 1]! + arr[i]!;
			}

			//add 0 for the center of the circle
			arr.push(0);

			//sort the array so that 0 is at the start
			arr.sort();

			return arr;
		},
		[radiusDiminishConstant],
	);

	const radiuses = useMemo(
		() => calculateRadiusDiminish(rings.length),
		[rings, calculateRadiusDiminish],
	);

	return (
		<QuadrantWrapper
			transform={props.transform}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
			ref={ref}
		>
			<Line x2={ringWidth} y2={0} stroke={colorScale(props.index)} />

			{props.rings.map((ringValue, ringIndex) => {
				const ringsLength = props.rings.length;
				const title = ringIndex === props.rings.length - 1 ? props.name : null;

				const leftMargin =
					textMargin ?? 40 * (radiuses[ringIndex + 1]! - radiuses[ringIndex]!);
				const showLabel = showOnlyFirstQuadrantLabels
					? props.index === 0
					: true;
				return (
					<g key={`${props.index}-${ringIndex}`}>
						{showLabel && (
							<Text
								name={ringValue}
								dx={leftMargin + radiuses[ringIndex]! * ringWidth}
								dy={textYOffset}
							/>
						)}
						<Path
							quadIndex={props.index}
							ringIndex={ringIndex}
							ringWidth={ringWidth}
							ringsLength={ringsLength}
							quad_angle={radialAngle}
							outerRadius={radiuses[ringIndex + 1] ?? 0}
							innerRadius={radiuses[ringIndex] ?? 0}
							title={title ?? ""}
						/>
					</g>
				);
			})}
			{props.points.map((value, index) => {
				return (
					<Item rotateDegrees={-props.rotateDegrees} key={index} data={value} />
				);
			})}
		</QuadrantWrapper>
	);
}
