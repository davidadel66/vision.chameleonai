import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'prefer-const': 'error',
      'no-var': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-key': 'error',
      'no-duplicate-imports': 'error',
      'no-console': 'warn', // Allow console.log but warn about it
      'no-debugger': 'error',
      'no-alert': 'error',
    },
  },
];

export default eslintConfig;
