module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: true,
    },
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double", { avoidEscape: true }],
    semi: ["error", "always"],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [{ pattern: "vue", group: "builtin", position: "before" }],
        pathGroupsExcludedImportTypes: [],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
};
