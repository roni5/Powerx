import { BabelConfig } from "@babel/core";

const config: BabelConfig = {
  presets: ["@babel/preset-typescript"],
  plugins: ["@babel/plugin-proposal-async-generator-functions"],
};

export default config;

