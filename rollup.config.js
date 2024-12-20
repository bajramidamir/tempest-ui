import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import typescriptModule from "typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js", // CommonJS output
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
    {
      file: "dist/index.mjs", // ES Module output
      format: "es",
      sourcemap: true,
      exports: "named",
    },
  ],
  plugins: [
    peerDepsExternal(),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
    }),
    typescript({
      declaration: true, // Generate declaration files
      typescript: typescriptModule,
      exclude: ["src/**/*.stories.tsx", "rollup.config.ts"], // Optional: if you don't want to generate types for these files,
    }),
    postcss({
      plugins: [],
      minimize: true,
      extract: false,
    }),
    terser(),
  ],
  external: ["react", "react-dom"],
};
