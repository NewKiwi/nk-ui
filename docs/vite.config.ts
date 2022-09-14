import { defineConfig } from "vite";
// import { presetUno, presetAttributify, presetIcons } from "unocss";
// import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from "../config/unocss";

export default defineConfig({
  plugins: [
    // vue(),
    vueJsx(),
    Unocss()
  ]
})