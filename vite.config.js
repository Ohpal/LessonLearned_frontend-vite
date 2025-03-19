import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['vuetify'],
  },
  server: {
    port: 4000,
    proxy: {
      '/rims-api': {
        target: 'http://rims.iptime.org:4550',
        // target: 'http://localhost:4550',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    vue(),
    VueDevTools(),
    federation({
      name: 'lessonlearn',
      filename: 'remoteEntry.js',
      exposes: {
        './lessonRouter': './src/router/lesson.js',
      },
      shared: ['vue', 'vue-router'],
    }),
    {
      name: 'exclude-css',
      transform(code, id) {
        // 특정 모듈의 CSS 파일을 감지하여 빌드에서 제외
        if (process.env.NODE_ENV !== 'development') {
          // 특정 모듈의 CSS 파일을 감지하여 빌드에서 제외
          if (/node_modules\/@svcfw\/components\/dist\/.*\.css$/.test(id)) {
            return { code: '' } // 빈 코드를 반환해 빌드에서 제외
          }
        }
      },
    },
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  css: {},
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        console.log('filename = ' + filename)
        return './../' + filename
      } else {
        return { relative: true }
      }
    },
  },
  build: {
    outDir: './deploy/dist',
    minify: false,
    cssCodeSplit: false,
    target: ['chrome89', 'edge89', 'firefox89', 'safari15'],
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split(',')
          const extType = info?.[info.length - 1]
          if (/\.(png|jpe?g|gif|svg|webp|webm|mp3)$/.test(assetInfo.name || '')) {
            return `media/[name]-[hash].${extType}`
          }
          if (/\.(css)$/.test(assetInfo.name || '')) {
            return `assets/[name]-[hash].${extType}`
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name || '')) {
            return `fonts/[name]-[hash].${extType}`
          }
          return `[name]-[hash].${extType}`
        },
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
