module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    // 'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "import/extensions": "off",
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "no-unused-vars": "off",
    "no-shadow": ["error", { "builtinGlobals": false, "hoist": "functions", "allow": [] }]
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js", ".ts"
        ],
        "moduleDirectory": [
          "node_modules", "src/"
        ]
      }
    }
  }
};
