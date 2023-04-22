import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// Get the value of the environment variable
const API_KEY = process.env.API_KEY

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify(API_KEY)
  }
})
