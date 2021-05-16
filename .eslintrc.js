module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "plugin:compat/recommended",
  ],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "comma-dangle": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "lines-between-class-members": "off",
    "no-debugger": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
