module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true  // Add this line to include Node.js environment
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    "no-extra-semi": "error"
  }
};


  