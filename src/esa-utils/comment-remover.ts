import type { Root, RootContent } from "hast";
import { isComment } from "./nodes";
import { visitParents } from "unist-util-visit-parents";

export function removeComments() {
  return (tree: Root) => {
    const targets: { parent: { children: RootContent[] }; idx: number }[] = [];

    visitParents(tree, (node, ancestors) => {
      if (isComment(node)) {
        const parent = ancestors[ancestors.length - 1];
        if (!parent) return;
        const idx = parent.children.indexOf(node);
        if (idx !== -1) targets.push({ parent, idx });
      }
    });

    for (const { parent, idx } of targets.sort((a, b) => b.idx - a.idx)) {
      parent.children.splice(idx, 1);
    }
  };
}
