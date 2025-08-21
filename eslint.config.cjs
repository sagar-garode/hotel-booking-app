const js = require("@eslint/js")
const globals = require("globals")
const tsParser = require("@typescript-eslint/parser")
const tsPlugin = require("@typescript-eslint/eslint-plugin")
const reactPlugin = require("eslint-plugin-react")

module.exports = [
  {
    files : ["**/*.{js,jsx,ts,tsx}"],
    languageOptions : {
      ecmaVersion : "latest",
      sourceType: "module", 
    },
    rules : {
      ...js.configs.recommended.rules,
      "no-unused-vars" : "warn",
      "no-undef": "error",
      "no-console": "off",
    }
  },

  {
    files : ["backend/**/*.{js,ts}"],
    languageOptions : {
      globals: { 
        ...globals.node
      }
    }
  },

  {
    files : ["frontend/**/*.{js,ts,tsx,jsx}"],
    languageOptions : {
      parser : tsParser,
      parserOptions : {
        ecmaVersion : "latest",
        sourceType: "module",
        ecmaFeatures :  { jsx : true }
      },
      globals: { 
        ...globals.browser,
        ...globals.node
      }
    },
    rules : {
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      "react-hooks/exhaustive-deps" : "off",
      "no-empty" : "off",
      "react/react-in-jsx-scope" : "off",
      "react/prop-types": "off"
    },
    plugins : {
      "@typescript-eslint" : tsPlugin,
      react : reactPlugin
    }
  },
]