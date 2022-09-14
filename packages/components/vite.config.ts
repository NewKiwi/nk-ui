import { defineConfig } from "vite";
// import { presetUno, presetAttributify, presetIcons } from "unocss";
// import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from "../../config/unocss";

const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

export default defineConfig({
  plugins: [
    // vue(),
    vueJsx(),
    Unocss()
  ],
  build: {
    rollupOptions,
    minify: 'terser',
    sourcemap: true, // 输出单独 source文件
    cssCodeSplit: true,
    reportCompressedSize: true,
    lib: {
      entry: './index.ts',
      name: 'NkUI',
      fileName: 'nk-ui',
      formats: ["es", "umd","iife"],
    },
    outDir: "./dist",
  }
})