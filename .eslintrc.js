module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:json/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          // ['~api', './src/api.js'],
          ['~components', './src/components'],
          ['~containers', './src/containers'],
          ['~contexts', './src/contexts'],
          ['~providers', './src/providers'],
          ['~pages', './src/pages'],
          ['~hooks', './src/hooks'],
          ['~utils', './src/utils'],
          ['~constants', './src/constants'],
          ['~fonts', './src/assets/fonts'],
          ['~img', './src/assets/img'],
          ['~routes', './src/routes.js'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'arrow-body-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'warn',
    'react/forbid-prop-types': 'off',
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    camelcase: ['warn', { ignoreImports: true }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'id-match': [
      'error',
      '^[a-zA-Z0-9_$]*$',
      {
        properties: true,
        onlyDeclarations: false,
      },
    ],
  },
}
