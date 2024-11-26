import globals from "globals";
import pluginJs from "@eslint/js";
import eslintRecommended from "eslint-plugin-prettier/recommended";

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
];
