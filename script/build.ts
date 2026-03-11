import { build as viteBuild } from "vite";
import { rm } from "fs/promises";

async function buildAll() {
  const subpath = process.env.GITHUB_PAGES_SUBPATH;
  const outDir = subpath ? "docs" : "arc";

  console.log(`building for ${subpath ? `/${subpath}/` : 'root'}...`);
  console.log(`outputting to ${outDir}...`);

  await rm(outDir, { recursive: true, force: true });
  await viteBuild();
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
