import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages 部署在子路径下时通过 VITE_BASE_PATH 指定，本地开发保持 /
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
  server: {
    port: 5173, // 固定端口，避免冲突
    open: true  // 启动后自动打开浏览器，新手友好
  }
})