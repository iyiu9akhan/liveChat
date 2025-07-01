// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [react(),tailwindcss()],
//   base:'/liveChat/'
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/liveChat/",
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            const dirs = id.toString().split("node_modules/")[1].split("/");
            const name = dirs[0].startsWith("@")
              ? `${dirs[0]}/${dirs[1]}`
              : dirs[0];
            return name;
          }
        },
      },
    },
  },
});
