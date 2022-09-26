module.exports = {
    plugins: ['eslint-plugin-jest'],
    extends: ['./index.js', 'plugin:jest/recommended'],
    env: {
        'jest/globals': true,
    },
    rules: {},
};
