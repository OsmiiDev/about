module.exports = {
  extends: [
    'eslint:recommended',
    'google',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
  ],
  ignorePatterns: ['**/*.config.js', '**/.eslintrc.js'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': [0],
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'none',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/triple-slash-reference': [0],
    'jsx-quotes': [2, 'prefer-single'],
    'linebreak-style': [2, 'unix'],
    'max-len': [2, 300],
    'new-cap': [0],
    'no-invalid-this': [0],
    'object-curly-newline': [
      2,
      {
        ObjectExpression: {
          minProperties: 2,
          multiline: true,
        },
        ObjectPattern: {
          minProperties: 2,
          multiline: true,
        },
      },
    ],
    'object-property-newline': [2, { allowAllPropertiesOnSameLine: false }],
    'prettier/prettier': [1],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-max-props-per-line': [
      2,
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        ignoreCase: true,
        multiline: 'first',
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true,
        shorthandLast: false,
      },
    ],
    'react/jsx-tag-spacing': [
      2,
      {
        afterOpening: 'never',
        beforeClosing: 'never',
        beforeSelfClosing: 'always',
        closingSlash: 'never',
      },
    ],
    semi: [2, 'always'],
    'sort-keys': [
      2,
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    'space-infix-ops': [2, { int32Hint: false }],
    'spaced-comment': [2, 'always', { markers: ['/'] }],
    'tailwindcss/classnames-order': [2, { order: 'alphabetical' }],
    'tailwindcss/no-custom-classname': [0],
  },
};
