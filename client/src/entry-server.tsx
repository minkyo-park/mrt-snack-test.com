import { renderToString } from "react-dom/server";
import type { BaseLocationHook, BaseSearchHook } from "wouter";
import App from "./App";

// wouter's own `memoryLocation()` helper relies on useSyncExternalStore without a
// getServerSnapshot argument, which React's renderToString rejects. Since a prerender
// pass only ever needs a single fixed path per render (no navigation happens), a plain
// hook that always returns the same tuple sidesteps that entirely.
function staticLocationHook(path: string): BaseLocationHook {
  return () => [path, () => {}];
}

function staticSearchHook(search: string): BaseSearchHook {
  return () => search;
}

export function render(path: string) {
  const [pathname, search = ""] = path.split("?");
  return renderToString(
    <App
      ssrHook={staticLocationHook(pathname)}
      ssrSearchHook={staticSearchHook(search)}
    />,
  );
}
