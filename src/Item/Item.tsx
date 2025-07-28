import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../theme-context.js";
import { ItemWrapper } from "./Item.style.js";

const MAX_LENGTH = 15;

export interface ItemProps {
	rotateDegrees: number;
	data: {
		id: string;
		name: string;
		x: number;
		y: number;
	};
}

export function Item(props: ItemProps) {
	//create ref
	const ref = useRef(null);

	//context variables
	const { itemFontSize, fontFamily } = useContext(ThemeContext);

	//state variables
	const [isHovered, setIsHovered] = useState(false);

	const shortName =
		props.data.name.length > MAX_LENGTH
			? `${props.data.name.substr(0, MAX_LENGTH)}...`
			: props.data.name;

	const onMouseToggle = () => {
		setIsHovered(!isHovered);
	};

	return (
		<ItemWrapper
			className="blip"
			id={`blip-${props.data.id}`}
			transform={
				" rotate(" +
				props.rotateDegrees +
				") translate(" +
				props.data.x +
				"," +
				props.data.y +
				")"
			}
			onMouseEnter={onMouseToggle}
			onMouseLeave={onMouseToggle}
			ref={ref}
			style={{
				opacity: isHovered ? "1.0" : "0.7",
				fontWeight: isHovered ? "Bold" : "Normal",
			}}
		>
			<circle r={"4px"} />
			<text
				className={"name"}
				dx={"7px"}
				dy={"7px"}
				fontSize={itemFontSize}
				fontFamily={fontFamily}
			>
				{isHovered ? props.data.name : shortName}
			</text>
		</ItemWrapper>
	);
}
