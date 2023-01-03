import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

const plugins = [
  typescript({ compilerOptions: { lib: ["es2016.array.include"] } }),
  commonjs(),
  resolve(),
  terser(),
];

export default defineConfig({
  input: "src/main.ts",
  output: {
    file: "dist/main.js",
    format: "cjs",
  },
  plugins,
});
