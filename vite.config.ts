import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      sections: path.resolve(__dirname, "src/sections"),
      assets: path.resolve(__dirname, "src/assets"),
      routes: path.resolve(__dirname, "src/routes"),
      pages: path.resolve(__dirname, "src/pages"),
      utils: path.resolve(__dirname, "src/utils"),
      stores: path.resolve(__dirname, "src/stores"),
      types: path.resolve(__dirname, "src/types"),
    },
  },
});
