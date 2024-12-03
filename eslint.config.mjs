import globals from "globals";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";
import eslintRecommended from "eslint-plugin-prettier/recommended";
import html from "eslint-plugin-html";
import * as cssPlugin from "eslint-plugin-css";

export default [
  eslintRecommended,
  {
    languageOptions: { globals: globals.browser },
    rules: {
      ...pluginJs.configs.recommended.rules,
      "prefer-const": "error",
      "no-unused-vars": "error",
      semi: "error",
    },
  },
  {
    files: ["src/**/*.test.js"],
    ...jest.configs["flat/recommended"],
  },
  {
    files: ["src/**/*.html"],
    plugins: { html },
  },
  cssPlugin.configs["flat/recommended"],
];
