module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  parser: '@babel/eslint-parser',
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_id',
        ],
        allowAfterThis: true,
        allowAfterSuper: true,
      },
    ],
    'no-confusing-arrow': 'error',
    'class-methods-use-this': 0,
    'max-nested-callbacks': ['error', 3],
    'max-classes-per-file': ['error', 1],
    'no-else-return': 'error',
    'max-params': ['error', 5],
    'function-paren-newline': ['error', 'consistent'],
    complexity: ['error', 10],
    'max-depth': ['error', 5],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      { aspects: ['invalidHref'] },
    ],
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: { some: ['nesting', 'id'] },
        allowChildren: false,
      },
    ],
    'import/no-named-as-default': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          ['sibling', 'index'],
        ],
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': [2, { ignore: ['children'] }],
  },
  env: {
    browser: true,
  },
  plugins: [
    '@babel',
    'import',
    'jsx-a11y',
  ],
};
