module.exports = {
  root: true,
  ignorePatterns: ['projects/**/*', 'src/app/open-bks/**'],
  plugins: ['implicit-dependencies'],
  env: {
    node: true,
    es6: true,
    jasmine: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.json', 'e2e/tsconfig.e2e.json'],
        createDefaultProgram: true,
      },
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/ng-cli-compat',
        'plugin:@angular-eslint/ng-cli-compat--formatting-add-on',
        'plugin:@angular-eslint/template/process-inline-templates',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'property',
            format: null,
          },
        ],
        '@typescript-eslint/member-ordering': ['off'],
        'no-underscore-dangle': ['off'],
        'array-callback-return': 'error',
        'prefer-arrow/prefer-arrow-functions': ['off'],
        '@angular-eslint/no-input-rename': ['off'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-template-curly-in-string': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        'implicit-dependencies/no-implicit': 'off',
        '@typescript-eslint/prefer-readonly': ['error'],
        'prefer-template': 'error',
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'off',
        'consistent-return': 'error',
        'max-params': ['off'],
        'max-len': ['error', { code: 140, ignorePattern: '^import' }],
      },
    },
    {
      files: ['src/app/**/*.ts'],
      rules: {
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: ['app'],
            style: 'kebab-case',
          },
        ],
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: ['app'],
            style: 'camelCase',
          },
        ],
      },
    },
    {
      files: ['src/stories/sgt-usa/**/*.ts'],
      rules: {
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: ['sgt'],
            style: 'kebab-case',
          },
        ],
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: ['sgt'],
            style: 'camelCase',
          },
        ],
      },
    },
    {
      files: ['*.spec.ts', '*.stub.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/prefer-readonly': 'off',
      },
    },
    {
      files: ['*.stories.ts', '*.test.ts'],
      rules: {
        'implicit-dependencies/no-implicit': 'off',
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
  ],
};
