import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        path.resolve(__dirname, "public"),
        path.resolve(__dirname, "src"),
        path.resolve(__dirname, "node_modules"),
      ],
    },
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
        // rewrite: path => path.replace(/^\/api/, ''), // If your backend is not expecting '/api' prefix
      },
    },
  },
});
