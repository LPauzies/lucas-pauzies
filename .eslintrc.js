module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:import/recommended"],
  plugins: ["svelte3"],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  rules: {},
  settings: {},
};
