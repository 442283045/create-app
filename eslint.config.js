// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true
  },
  {
    rules: {
      'style/comma-dangle': ['error', 'never']
    }
  }
)
