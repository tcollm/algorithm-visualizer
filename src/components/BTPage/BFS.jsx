import {
  TIMEOUT,
  VISITED_NODE,
  TO_BE_VISITED_NODE,
  TARGET_NODE,
} from "./constants.js";
import { updateNodeColor } from "./treeUtils.js";

// This is a modification of BFS to process one node at a time (so that the user can process what is happening in the algorithm)
export const BFS = (tree, setTree, TARGET) => {
  let queue = [tree]; // store root node

  const processNode = () => {
    // exhausted queue
    if (queue.length === 0) {
      alert("No target found!");
      return;
    }

    const currNode = queue.shift(); // pop from queue

    // found target
    if (currNode.name === TARGET) {
      updateNodeColor(setTree, currNode, TARGET_NODE);
      alert("Found target: " + TARGET);
      return;
    }

    // mark current node as visited
    updateNodeColor(setTree, currNode, VISITED_NODE);

    // stage children
    if (currNode.children) {
      currNode.children.forEach((child) => {
        updateNodeColor(setTree, child, TO_BE_VISITED_NODE);
        queue.push(child);
      });
    }

    // timeout before the next node is processed (500ms)
    setTimeout(processNode, TIMEOUT);
  };

  processNode();
};
