import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:process.env.vite_base_path || "/Weather-App-created-by-me-with-react-"
})
