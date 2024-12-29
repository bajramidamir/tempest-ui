import { withDefaultConfig } from "react-docgen-typescript";
import fs from "fs";
import path from "path";
import { glob } from "glob";

const options = {
  savePropValueAsString: true,
};

const parser = withDefaultConfig(options);
const componentFiles = glob.sync(path.resolve("src/components/**/*.tsx"));
const docs = parser.parse(componentFiles);

fs.writeFileSync(
  path.resolve("docs/props.json"),
  JSON.stringify(docs, null, 2)
);

console.log("Documentation generated at docs/props.json");
