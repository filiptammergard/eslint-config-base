import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { ESLint } from "eslint"
import config from "../index.js"

const eslint = new ESLint({ overrideConfigFile: true, overrideConfig: config })

describe("@tammergard/eslint-config-base", () => {
	it("exports a non-empty array of config objects", () => {
		assert.ok(Array.isArray(config))
		assert.ok(config.length > 0)
	})

	it("lints clean code without errors", async () => {
		const [result] = await eslint.lintText("function foo() {}\nfoo()\n")
		assert.equal(result.errorCount, 0)
		assert.equal(result.warningCount, 0)
	})

	it("flags eslint:recommended violations (no-undef)", async () => {
		const [result] = await eslint.lintText("bar()\n")
		const ruleIds = result.messages.map((m) => m.ruleId)
		assert.ok(
			ruleIds.includes("no-undef"),
			`expected no-undef, got: ${ruleIds.join(", ")}`,
		)
	})

	it("disables no-use-before-define", async () => {
		const [result] = await eslint.lintText("foo()\nfunction foo() {}\n")
		const ruleIds = result.messages.map((m) => m.ruleId)
		assert.ok(
			!ruleIds.includes("no-use-before-define"),
			`no-use-before-define should be off, got messages: ${JSON.stringify(result.messages)}`,
		)
	})

	it("reports unused eslint-disable directives", async () => {
		const [result] = await eslint.lintText(
			"// eslint-disable-next-line no-console\nfunction foo() {}\nfoo()\n",
		)
		const hasUnusedDirective = result.messages.some(
			(m) => m.message && m.message.toLowerCase().includes("unused"),
		)
		assert.ok(
			hasUnusedDirective,
			`expected unused disable directive report, got: ${JSON.stringify(result.messages)}`,
		)
	})
})
