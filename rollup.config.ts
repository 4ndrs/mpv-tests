import { defineConfig } from "rollup";

import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

const plugins = [typescript(), commonjs(), resolve(), terser()];

export default defineConfig([
  {
    input: "src/main.ts",
    output: {
      file: "dist/main.js",
      format: "cjs",
    },
    plugins,
  },
  {
    input: "src/user-data-serv.ts",
    output: {
      file: "dist/user-data-serv.js",
      format: "cjs",
    },
    plugins,
  },
  {
    input: "src/user-data-client.ts",
    output: {
      file: "dist/user-data-client.js",
      format: "cjs",
    },
    plugins,
  },
  {
    input: "src/eventEmitter.ts",
    output: {
      file: "dist/eventEmitter.js",
      format: "cjs",
    },
    plugins,
  },
  {
    input: "src/purempv-shared.ts",
    output: {
      file: "dist/purempv-shared.js",
      format: "cjs",
    },
    plugins,
  },
]);
