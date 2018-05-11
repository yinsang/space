module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "amd": true
  },
  "parserOptions": {
    "sourceType": 'module'
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "plugins": ['html'],
  "rules":{
      "indent":[2,2],
  }
};
