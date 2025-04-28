import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react-quill"],
  },
  define: {
    global: {},
  },
  server: {
    proxy: {
      "/upload": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  }, 
});


