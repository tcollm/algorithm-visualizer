import {
  TIMEOUT,
  TARGET_NODE,
  TO_BE_VISITED_NODE,
  VISITED_NODE,
} from "./constants";
import { updateNodeColor } from "./treeUtils";

// Modification of DFS to process one node at a time (similar to DelayedBFS)
export const DFS = (tree, setTree, TARGET) => {
  let stack = [tree];

  const processNode = () => {
    // exhausted stack
    if (stack.length === 0) {
      alert("No target found!");
      return;
    }

    const currNode = stack.pop();

    // found target
    if (currNode.name === TARGET) {
      updateNodeColor(setTree, currNode, TARGET_NODE);
      alert("Found target: " + TARGET);
      return;
    }

    // mark current node as visited
    updateNodeColor(setTree, currNode, VISITED_NODE);

    // stage children (reverse order so that tree is processed left to right)
    if (currNode.children) {
      currNode.children
        .slice()
        .reverse()
        .forEach((child) => {
          updateNodeColor(setTree, child, TO_BE_VISITED_NODE);
          stack.push(child);
        });
    }

    // timeout before processing next node (500ms)
    setTimeout(processNode, TIMEOUT);
  };

  processNode();
};
