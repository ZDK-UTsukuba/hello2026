import { visit } from "unist-util-visit";
import type { Node } from "hast";
import { isAnchor, type AnchorNode } from "./nodes";

function isExternalLink(href: string): boolean {
  /**
   * @see https://docs.astro.build/ja/guides/environment-variables/
   */
  if (href.startsWith(import.meta.env.SITE) || href.startsWith("/")) {
    return false;
  }
  return true;
}

function isZDKLink(href: string): boolean {
  const prefixes = [
    "https://www.zdk.tsukuba.ac.jp/",
    "https://www.stb.tsukuba.ac.jp/~zdk/",
  ];
  return prefixes.some((prefix) => href.startsWith(prefix));
}

export function externalLinkReplacer() {
  const externalLinkNodes: AnchorNode[] = [];
  const noZdkLinkNodes: AnchorNode[] = [];
  return async (tree: Node) => {
    visit(tree, (node) => {
      if (isAnchor(node)) {
        const { properties } = node;
        if (isExternalLink(properties.href)) {
          externalLinkNodes.push(node);
        }
        if (!isZDKLink(properties.href)) {
          noZdkLinkNodes.push(node);
        }
      }
    });

    for (const node of externalLinkNodes) {
      const { properties } = node;
      properties.target = "_blank";
    }
    for (const node of noZdkLinkNodes) {
      const { properties } = node;
      properties.rel = "noopener nofollow";
    }
  };
}
