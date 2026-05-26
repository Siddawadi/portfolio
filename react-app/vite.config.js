import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  base: "/portfolio/",   // 🔥 IMPORTANT (repo name only)

  server: {
    port: 3000,
  },
});