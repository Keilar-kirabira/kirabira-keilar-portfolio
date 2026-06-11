import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";  // 1. Import the plugin

// add tailwindcss here
export default defineConfig({
  plugins: [react(), tailwindcss()],
});