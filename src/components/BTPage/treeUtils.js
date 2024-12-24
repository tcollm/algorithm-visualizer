// Shared helper functions

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
