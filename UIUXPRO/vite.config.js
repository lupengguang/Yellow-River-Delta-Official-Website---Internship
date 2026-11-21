import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // 固定端口，避免冲突
    open: true  // 启动后自动打开浏览器，新手友好
  }
})