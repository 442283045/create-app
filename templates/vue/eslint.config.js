import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    vue: true
  },
  {
    rules: {
      'style/comma-dangle': ['error', 'never']
    }
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/html-self-closing': [
        'error',
        {
          html: {
            normal: 'never',
            component: 'always',
            void: 'never'
          }
        }
      ],
      'vue/comma-dangle': ['error', 'never']
    }
  }
)
