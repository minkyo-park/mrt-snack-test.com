// Prerenders the fixed set of client routes to static HTML after `vite build`.
// wouter has no first-party SSG integration, so this builds a small Node-targeted
// SSR bundle of client/src/entry-server.tsx, imports its `render(path)` export per
// route, and injects the resulting markup into the built index.html template.
import { build } from "vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const clientOutDir = path.resolve(root, "dist/public");
const ssrOutDir = path.resolve(root, "dist/server");

const routes = [
  { path: "/", file: "index.html", title: null },
  { path: "/discount-codes", file: "discount-codes.html", title: "할인코드" },
  { path: "/card-discounts", file: "card-discounts.html", title: "카드사 할인" },
  { path: "/flights", file: "flights.html", title: "항공권 할인" },
  { path: "/accommodation", file: "accommodation.html", title: "숙소 할인" },
  { path: "/comparison", file: "comparison.html", title: "비교 분석" },
  { path: "/faq", file: "faq.html", title: "자주 묻는 질문" },
  { path: "/404", file: "404.html", title: "페이지를 찾을 수 없습니다" },
];

const SITE_NAME = "마이리얼트립 할인쿠폰";

async function main() {
  await build({
    root,
    build: {
      ssr: path.resolve(root, "client/src/entry-server.tsx"),
      outDir: "dist/server",
      emptyOutDir: true,
      copyPublicDir: false,
    },
    logLevel: "warn",
  });

  const entryPath = path.join(ssrOutDir, "entry-server.js");
  const { render } = await import(pathToFileURL(entryPath).href);

  const template = fs.readFileSync(path.join(clientOutDir, "index.html"), "utf-8");

  for (const route of routes) {
    const appHtml = render(route.path);
    let html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`,
    );
    const title = route.title ? `${route.title} - ${SITE_NAME}` : SITE_NAME;
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
    fs.writeFileSync(path.join(clientOutDir, route.file), html);
    console.log(`[prerender] ${route.path} -> dist/public/${route.file}`);
  }

  fs.rmSync(ssrOutDir, { recursive: true, force: true });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
