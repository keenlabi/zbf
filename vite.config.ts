import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import svgr from "vite-plugin-svgr";

// const svgrOptionsConfig = {

// }
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server:{
    port: 7000,
    proxy: {
      "/api": {
        target: "http://localhost:7100",
        // target: "https://shawnx-6d26c8cc075a.herokuapp.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      src: path.resolve('src/'),
    },
  },
  build:{
    outDir:'build'
  },
  define: {
    "process.env": loadEnv("development", process.cwd(), "")
  }
})
