module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'graphql'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  rules: {
    "no-unused-vars": "off",
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/quotes": "off",
    "max-len": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "arrow-parens": "off",
    "@typescript-eslint/naming-convention": "off",
    "import/no-useless-path-segments": "off",
    "import/no-cycle": "off",
    "no-return-await": "off",
    "no-nested-ternary": "off",
    "consistent-return": "off",
    "prefer-destructuring": "off",
  },
};
