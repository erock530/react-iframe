import js from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'

export default [
  // Base ESLint recommended rules
  js.configs.recommended,

  // React plugin recommended rules
  pluginReact.configs.flat.recommended,

  // Configuration for all JavaScript/JSX files
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      // React specific rules
      'react/prop-types': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',

      // General JavaScript rules
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',

      // Code style (handled by Prettier, but good fallbacks)
      semi: ['error', 'never'],
      quotes: ['error', 'single']
    }
  },

  // Test files configuration
  {
    files: ['**/*.test.{js,mjs,cjs,jsx}', '**/*.spec.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node
      }
    },
    rules: {
      'no-console': 'off' // Allow console in tests
    }
  },

  // Node.js specific files (like config files)
  {
    files: ['**/*.config.{js,mjs}', '**/.*rc.{js,mjs}', 'eslint.config.mjs'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      'no-console': 'off' // Allow console in config files
    }
  },

  // Files to ignore
  {
    ignores: [
      'build/*',
      'dist/*',
      'node_modules/*',
      'coverage/*',
      '*.min.js',
      '.git/*',
      'example/build/*',
      'example/dist/*'
    ]
  }
]
