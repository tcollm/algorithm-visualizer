// Shared helper functions

// append node to tree
export const append = (parentName, nodeName, treeData) => {
  // helper to find a node in the tree
  const traverse = (jsonObj, target) => {
    if (jsonObj !== null && typeof jsonObj === "object") {
      if (jsonObj.name === target) {
        return jsonObj; // Return the found node immediately
      }

      // return the result of traversing the children recursively
      for (let [, value] of Object.entries(jsonObj)) {
        const result = traverse(value, target);
        if (result) return result; // If a result is found, propagate it up (fixes issue where function returned null)
      }
    }

    return null; // Couldn't find target
  };

  const parent = traverse(treeData, parentName);
  // console.log("Appending %s to tree", nodeName);

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
