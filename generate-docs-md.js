import fs from "fs";
import path from "path";

const propsData = JSON.parse(fs.readFileSync("docs/props.json", "utf-8"));
const outputDir = path.resolve("docs/components");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate Markdown for each component
propsData.forEach((component) => {
  const { displayName, props } = component;

  // Start the Markdown content
  let mdContent = `# ${displayName} Component\n\n`;

  mdContent += `## Props\n\n| Name | Type | Default | Description |\n|------|------|---------|-------------|\n`;

  // Loop through props and format into table rows
  for (const [propName, propData] of Object.entries(props)) {
    const { type, defaultValue, description, required } = propData;

    mdContent += `| **${propName}** | \`${type?.name || "unknown"}\` | ${
      defaultValue?.value || "—"
    } | ${description || (required ? "_Required_" : "—")} |\n`;
  }

  // Write to individual Markdown file
  const outputFilePath = path.join(outputDir, `${displayName}.md`);
  fs.writeFileSync(outputFilePath, mdContent, "utf-8");

  console.log(`Generated documentation for ${displayName}`);
});

console.log(`All documentation has been saved to ${outputDir}`);
