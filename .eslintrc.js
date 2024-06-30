module.exports = {
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    semi: 'off',
    eqeqeq: 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    curly: ['error', 'all'],
    'prefer-arrow-callback': 'error',
    'no-use-before-define': 'off',
    'new-parens': 'error',
    'no-bitwise': 'error',
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
    'no-caller': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
    'quote-props': ['error', 'as-needed'],
    'func-style': ['error', 'expression'],
    'spaced-comment': ['error', 'always', { exceptions: ['-', '+'], markers: ['/'] }],
    'no-sparse-arrays': 'off',
    'no-duplicate-imports': 'error',
    'no-constant-binary-expression': 'error',
    yoda: ['error', 'never'],
    'object-shorthand': ['error', 'properties'],
    'no-async-promise-executor': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: false, typedefs: true },
    ],
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'explicit',
        },
      },
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    'newline-before-return': 'error',
    'no-new-object': 'error',
    '@typescript-eslint/no-shadow': 'error',
    'prefer-object-spread': 'error',
    'no-array-constructor': 'error',
    'array-callback-return': 'error',
    'prefer-template': 'error',
    'no-eval': 'error',
    'no-useless-escape': 'error',
    'no-loop-func': 'error',
    'prefer-rest-params': 'error',
    '@typescript-eslint/default-param-last': 'error',
    'no-new-func': 'error',
    'prefer-spread': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-iterator': 'error',
    'prefer-const': 'error',
    'one-var': ['error', 'never'],
    'no-multi-assign': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-else-return': 'error',
    'no-new-wrappers': 'error',
    'react/boolean-prop-naming': [
      'error',
      {
        rule: '^((is|are|has|was|were|should|can|did|will|with)[A-Z]([A-Za-z0-9]?)+|loading|visible|disabled|opened)',
        validateNested: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/style-prop-object': ['error', { allow: ['FormattedNumber'] }],
    'react/hook-use-state': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    'react/jsx-no-target-blank': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-children-prop': 'error',
    'react/no-array-index-key': 'off',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/void-dom-elements-no-children': 'error',
    'react/self-closing-comp': 'error',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/no-unknown-property': 'error',
    'react/no-this-in-sfc': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    'react/no-direct-mutation-state': 'off',
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],
    'react/jsx-boolean-value': ['error', 'never'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: false,
        useTabs: false,
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        arrowParens: 'avoid',
        jsxSingleQuote: true,
      },
    ],
  },
  plugins: ['react-hooks', 'prefer-arrow'],
  settings: {
    react: {
      version: 'detect',
    },
  },
}