import { defineBuildConfig } from 'unbuild'
export default defineBuildConfig({
  entries: ['src/main'],
  clean: true,
  rollup: {
    inlineDependencies: true,
    esbuild: {
      target: 'node18',
      minify: true
    }
  },

  alias: {
    prompt: 'prompts/lib/index.js'
  }
})
