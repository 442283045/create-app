import antfu from '@antfu/eslint-config'

export default antfu(
  { typescript: true },
  {
    rules: {
      'style/comma-dangle': ['error', 'never']
    }
  }
)
