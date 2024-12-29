import { VISITED_NODE, TO_BE_VISITED_NODE } from "./constants.js";

// TODO: make changing color more efficient (currently re-renders entire tree)
export const BFS = (tree, setTree, TARGET) => {
  // yellow = to be visited
  // red = visited

  let queue = [tree]; // store root node

  const updateNodeColor = (node, color) => {
    node.color = color;
    setTree((prevTree) => ({ ...prevTree })); // re-render tree
  };

  while (queue.length > 0) {
    const currNode = queue.shift(); // pop from queue

    // found target
    if (currNode.name === TARGET) {
      updateNodeColor(currNode, VISITED_NODE);
      console.log("Found target: %s", currNode);
      return;
    }

    updateNodeColor(currNode, VISITED_NODE);

    if (currNode.children) {
      currNode.children.forEach((child) => {
        updateNodeColor(child, TO_BE_VISITED_NODE);
        queue.push(child);
      });
    }
  }
  console.log("No target found!");
  return;
};
