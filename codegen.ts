import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/api/graphql',
  documents: ['app/**/*.{tsx}', 'app/graphql/queries.ts'],
  generates: {
    './codegen/generations/core/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' },
      },
      plugins: [],
    },
    './codegen/generations/core/types.ts': {
      plugins: ['typed-document-node', 'typescript', 'typescript-operations'],
    },
  },
  ignoreNoDocuments: true,
}

export default config
// documents: 'app/**/*.{ts, tsx}}',
