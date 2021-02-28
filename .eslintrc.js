module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "prettier",
    "react-app",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  plugins: ["prettier", "@typescript-eslint", "jsx-a11y"],
  env: {
    browser: true,
    node: true,
  },
  // globals: {
  //   figma: true,
  //   __html__: true,
  //   Paint: true,
  //   Effect: true,
  //   ImagePaint: true,
  //   RGBA: true,
  //   SceneNode: true,
  // },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      module: true,
    },
  },
  rules: {
    "no-undef": "off", // TODO
    "no-unused-vars": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    // TODO
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: true,
      },
    ],
    // "react/jsx-uses-react": "off",
    // "react/react-in-jsx-scope": "off",
  },
};
