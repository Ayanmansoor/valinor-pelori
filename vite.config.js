import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0", // Allows external devices to access your app
    port: 5173, // Keeps the port the same for easy access
  },
  build: {
    outDir: "dist", // Ensure the output directory is 'dist' as Vercel expects
    rollupOptions: {
      output: {
        manualChunks: undefined, // Avoid dynamic imports breaking the build
      },
    },
  },


});
