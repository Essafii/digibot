/**
 * Required when using output: "standalone" + PM2 with `node .next/standalone/server.js`:
 * the standalone bundle does not include `public/` or `.next/static/` unless copied.
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/output
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const standalone = path.join(root, ".next", "standalone");

if (!fs.existsSync(standalone)) {
  console.log("copy-standalone-assets: no .next/standalone, skip.");
  process.exit(0);
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn("copy-standalone-assets: missing source, skip:", src);
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
}

copyDir(path.join(root, "public"), path.join(standalone, "public"));
copyDir(path.join(root, ".next", "static"), path.join(standalone, ".next", "static"));

console.log("copy-standalone-assets: public/ and .next/static/ → standalone ok.");
