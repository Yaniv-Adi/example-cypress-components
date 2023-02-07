import { defineConfig } from "cypress";
import eyesPlugin from "@applitools/eyes-cypress" 

export default eyesPlugin(defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
}));

