import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/

const projectDir = path.resolve()
export default defineConfig({
  plugins: [
    AutoImport({
      include: [
        /\.[tj]sx?$/ // .ts, .tsx, .js, .jsx
      ],
      imports: [
        'react',
        'react-router-dom'
      ],
      dts: true
    }),
    react()
  ],
  server: {
    open: true
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(projectDir, 'src')
      }
    ]
  }
})
