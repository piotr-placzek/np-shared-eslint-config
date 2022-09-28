module.exports = {
    plugins: ['eslint-plugin-prettier'],
    extends: ['eslint:recommended', 'eslint-config-prettier'],
    rules: {
        'prettier/prettier': ['error', require('@piotr-placzek/prettier-config')],
    },
    ignorePatterns: ['**/node_modules/*', '**/build/*', '**/dist/*'],
    parserOptions: {
        ecmaVersion: 9,
    },
    env: {
        es6: true,
        node: true,
    },
};
