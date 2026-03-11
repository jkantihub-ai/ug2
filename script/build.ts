import { build as viteBuild } from "vite";
import { rm } from "fs/promises";
import react from "@vitejs/plugin-react";
import path from "path";

async function buildAll() {
  const subpath = process.env.GITHUB_PAGES_SUBPATH;
  const outDir = subpath ? "docs" : "arc";
  const base = subpath ? `/${subpath}/` : "/";

  console.log(`building for ${subpath ? `/${subpath}/` : "root"}...`);
  console.log(`outputting to ${outDir}...`);

  await rm(outDir, { recursive: true, force: true });

  await viteBuild({
    base,
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve("client", "src"),
        "@shared": path.resolve("shared"),
      },
    },
    root: path.resolve("client"),
    build: {
      outDir: path.resolve(outDir),
      emptyOutDir: true,
    },
    define: {
      "import.meta.env.VITE_USE_HASH_ROUTER": subpath ? "true" : "false",
    },
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
