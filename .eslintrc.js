module.exports =  {
  env: {
    "browser": true,
    "node": true,
    "jquery": true,
    },
  extends:  [
    'airbnb/base',
  ],
  parserOptions:  {
    ecmaVersion:  6,
    sourceType:  'module',
  },
  rules:  {
    'linebreak-style': ["error", "windows"],
    'max-len': ["error", { "code": 125 }],
    "class-methods-use-this": 0,
    "no-new": 0,
    "no-underscore-dangle": 0,
    "no-undef": 0
  }
};