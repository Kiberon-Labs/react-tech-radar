import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Radar } from "../src/index.js";

function App() {
	const setup = {
		rings: ["adopt", "trial", "assess", "hold"],
		quadrants: ["tools", "techniques", "platforms", "languages"],
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
	};

	return (
		<div className="App">
			<Radar {...setup} />
		</div>
	);
}

it("renders without crashing", () => {
	expect(() => render(<App />)).not.toThrow();
});
