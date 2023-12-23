module.exports = {
    extends: [
        'eslint:recommended',
        "plugin:react/recommended",
        'plugin:@typescript-eslint/recommended-type-checked',
        "plugin:prettier/recommended"
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
      project: true,
      tsconfigRootDir: __dirname,
    },
    rules: {
        "prettier/prettier": "warn",
    },
    root: true,
};