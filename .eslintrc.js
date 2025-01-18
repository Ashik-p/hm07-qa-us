/* eslint-disable no-undef */
module.exports = {
    "env": {
        "browser": true,
        "node": true, // Enable Node.js globals like `require`
        "es2021": true,
        "jest/globals": true
    },
    "extends": "eslint:recommended",
    "overrides": [],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["jest"],
    "rules": {
    }
}
