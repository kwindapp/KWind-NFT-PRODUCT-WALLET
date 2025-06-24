import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import path from 'path'

export default defineConfig({
    define: {
        global: {},
        'process.env': {},
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            process: 'process/browser',
            buffer: 'buffer',
        },
    },
    plugins: [
        vue({
            template: { transformAssetUrls },
        }),
        quasar({
            sassVariables: 'src/quasar-variables.sass',
        }),
    ],
})
