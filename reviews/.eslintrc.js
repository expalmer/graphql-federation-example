module.exports = {
  extends: ['airbnb-base', 'plugin:jest/recommended', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'no-console': 0,
    semi: [2, 'never'],
    'object-curly-spacing': [2, 'always'],
    'arrow-parens': [2, 'as-needed'],
    'no-underscore-dangle': [2, { allow: ['_id'] }],
    'linebreak-style': 0,
    camelcase: [0, { properties: 'never' }],
  },
  plugins: ['import', 'jest', 'prettier'],
  env: {
    node: true,
    'jest/globals': true,
  },
  globals: {
    describe: true,
    it: true,
    expect: true,
    request: true,
    before: true,
    setupApp: true,
    supertest: true,
    beforeEach: true,
    document: true,
    window: true,
  },
}