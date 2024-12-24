/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Tree from "react-d3-tree";

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

export const append = (parentName = treeData.name, nodeName, treeData) => {
  // parentAddress = traverse(treeData, parent);
  const parent = traverse(treeData, parentName);
  console.log("Appending %s to tree", nodeName);

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

      if (parent.children.length == 2) {
        swapChildren(parent); // format children
      }
    }

    return; // Success
  } else {
    return -1; // Failure, parent does not exist
  }
};

// correctly append children to parent based on binary tree rules
const swapChildren = (parentNode) => {
  const left = parentNode.children[0];
  const right = parentNode.children[1];

  if (parseInt(left.name) > parseInt(right.name)) {
    const temp = left.name;
    left.name = right.name;
    right.name = temp;
  }
};

const calculateHeight = (tree) => {
  // empty
  if (!tree) {
    return -1;
  }

  const leftHeight = calculateHeight(tree.children[0]);
  const rightHeight = calculateHeight(tree.children[1]);

  return Math.max(leftHeight, rightHeight) + 1;
};

// create an array of all of the node values in the tree
const checkAllNodes = (tree, seen = []) => {
  if (!tree) {
    return seen;
  }

  seen.push(tree.name);

  // check left child
  if (tree.children.length > 0) {
    checkAllNodes(tree.children[0], seen);
  }
  // check right child
  if (tree.children.length > 1) {
    checkAllNodes(tree.children[1], seen);
  }

  return seen;
};

// create tree of height 5
export const createRandomTree = (tree) => {
  let height = calculateHeight(tree);
  const validValues = [];
  const invalidValues = checkAllNodes(tree).map((val) => parseInt(val, 10)); // values already in tree (converted to ints for comparisons)

  for (let i = 1; i <= 100; i++) {
    if (!invalidValues.includes(i)) {
      validValues.push(i);
    }
  }

  // tree is already full of all ints 1 to 100
  if (validValues.length === 0) {
    console.warn(
      "CreateRandomTree: Valid values array is empty, no values to append."
    );
    return;
  }

  const MAX_TREE_HEIGHT = 5;
  // get random value, append to tree and remove from array
  while (height < MAX_TREE_HEIGHT) {
    let randIndex = Math.floor(Math.random() * validValues.length);
    append(tree.name, validValues[randIndex].toString(), tree); // convert nodes back to strings (required for react-d3-tree)
    validValues.splice(randIndex, 1);
    height = calculateHeight(tree);
  }

  if (height < 5) {
    console.warn(
      "CreateRandomTree: could not build to desired height of ",
      MAX_TREE_HEIGHT
    );
    return;
  }
};

export const BST = ({ tree }) => {
  // FOR TESTING:

  // const rootValue = 65;
  // for (int i = 1; i < 100; i++) {
  //   if (i !== rootValue) {
  //     append("65", i.toString(), treeData);
  //   }
  // }

  // resize tree svg
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyles = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className="treeWrapper" style={containerStyles}>
      <Tree
        data={tree}
        translate={{
          x: dimensions.width * 0.31, // 31vw
          y: dimensions.height * 0.03, // 3vh
        }}
        // zoomable={false}
        // draggable={false}
        orientation="vertical"
      />
    </div>
  );
};
