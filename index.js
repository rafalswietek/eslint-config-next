module.exports = {
  extends: [
    '@rafalswietek/eslint-config',
    'airbnb',
    'airbnb/hooks',
  ],
  parser: '@babel/eslint-parser',
  rules: {
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
