// Shared helper functions

import { DEFAULT_NODE } from "./constants";

// find a node in the tree
export const traverse = (jsonObj, target) => {
  if (jsonObj !== null && typeof jsonObj === "object") {
    if (jsonObj.name === target) {
      return jsonObj; // Return the found node immediately
    }

    // recursively search children if they exist
    if (jsonObj.children) {
      for (let child of jsonObj.children) {
        const result = traverse(child, target);
        if (result) return result;
      }
    }
  }

  return null; // Couldn't find target
};

// append node to tree
export const append = (parentName, nodeName, treeData) => {
  const parent = traverse(treeData, parentName);

  const newNode = {
    name: nodeName,
    color: DEFAULT_NODE,
    children: [],
  };

  if (parent) {
    if (parent.children.length == 2) {
      if (parseInt(nodeName) > parseInt(parentName)) {
        // newNode is greater than parent -> append to right child
        append(parent.children[1].name, nodeName, treeData);
      } else {
        // newNode is less than parent -> append to left child
        append(parent.children[0].name, nodeName, treeData);
      }
    } else {
      parent.children.push(newNode);
    }

    return; // Success
  } else {
    return -1; // Failure, parent does not exist
  }
};

// calculate tree height
export const calculateHeight = (tree) => {
  // empty
  if (!tree) {
    return -1;
  }

  const leftHeight = calculateHeight(tree.children[0]);
  const rightHeight = calculateHeight(tree.children[1]);

  return Math.max(leftHeight, rightHeight) + 1;
};

// used by resetColors function, and BFS
export const updateNodeColor = (setTree, node, color) => {
  const updatedNode = { ...node, color };
  setTree((prevTree) => {
    return updateNodeInTree(prevTree, updatedNode);
  });
};

// create copy of old node instead of updating previous one
const updateNodeInTree = (tree, updatedNode) => {
  if (tree.name === updatedNode.name) return updatedNode;
  if (tree.children) {
    return {
      ...tree,
      children: tree.children.map((child) =>
        updateNodeInTree(child, updatedNode)
      ),
    };
  }
  return tree; // return root if no node matches
};

// reset node color to default (used by BFS and resetButton)
export const resetColors = (node, setTree) => {
  // console.log("Reset called!");

  updateNodeColor(setTree, node, DEFAULT_NODE);

  if (node.children) {
    node.children.forEach((child) => {
      resetColors(child, setTree);
    });
  }
};
