module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'airbnb-typescript/base'
    ],
    rules: {
        "no-console": 'off',
        "import/prefer-default-export": "off"
    },
    parserOptions: {
        project: './tsconfig.json'
    }
};