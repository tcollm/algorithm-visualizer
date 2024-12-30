import { VISITED_NODE, TO_BE_VISITED_NODE, TARGET_NODE } from "./constants.js";
import { resetColors, updateNodeColor } from "./treeUtils.js";

// TODO: make changing color more efficient (currently re-renders entire tree)
export const BFS = (tree, setTree, TARGET) => {
  // reset tree colors before searching
  resetColors(setTree, tree);

  let queue = [tree]; // store root node

  while (queue.length > 0) {
    const currNode = queue.shift(); // pop from queue

    // found target
    if (currNode.name === TARGET) {
      updateNodeColor(setTree, currNode, TARGET_NODE);
      console.log("Found target: %s", currNode.name);
      return;
    }
    updateNodeColor(setTree, currNode, VISITED_NODE);

    if (currNode.children) {
      currNode.children.forEach((child) => {
        updateNodeColor(setTree, child, TO_BE_VISITED_NODE);
        queue.push(child);
      });
    }
  }
  console.log("No target found!");

  return;
};
