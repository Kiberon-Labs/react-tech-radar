import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "jsdom",
		include: ["tests/**/*.{test,spec}.{js,ts,tsx}"],
		coverage: {
			provider: "v8",
			reporter: ["text", "json", "html", "lcov"],
			include: ["src/**/*.{js,ts,tsx}"],
			exclude: [
				"src/**/*.stories.{js,ts,tsx}",
				"src/**/*.test.{js,ts,tsx}",
				"src/index.ts",
				"src/theme-context.js",
			],
			all: true,
			clean: true,
			reportsDirectory: "./coverage",
		},
	},
});
