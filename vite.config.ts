import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // 如果报错__dirname找不到，需要安装node,执行yarn add @types/node --save-dev
      "@": path.resolve(__dirname, "src"),
      "comps": path.resolve(__dirname, "src/components"),
    }
  },
  plugins: [
    vue(),
    //按需导入element-plus组件
    ViteComponents({
      customComponentResolvers: [ElementPlusResolver()],
    }),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css` // 按需引入样式
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        },
      ],
    }),
  ],
})