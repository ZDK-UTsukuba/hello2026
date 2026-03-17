import { visit } from "unist-util-visit";
import type { Node } from "hast";
import { isAnchor, type AnchorNode } from "./nodes";

function isZDKLink(href: string): boolean {
    /**
     * @see https://docs.astro.build/ja/guides/environment-variables/
     */
  const url = new URL(href, import.meta.env.SITE);
  return (
    url.host.endsWith("zdk.tsukuba.ac.jp") ||
    (url.host === "www.stb.tsukuba.ac.jp" && url.pathname.startsWith("/~zdk/"))
  );
}

export function externalLinkReplacer() {
  const noZdkLinkNodes: AnchorNode[] = [];
  return async (tree: Node) => {
    visit(tree, (node) => {
      if (isAnchor(node)) {
        const { properties } = node;
        if (!isZDKLink(properties.href)) {
          noZdkLinkNodes.push(node);
        }
      }
    });
    for (const node of noZdkLinkNodes) {
      const { properties } = node;
      properties.rel = "noopener nofollow";
    }
  };
}
