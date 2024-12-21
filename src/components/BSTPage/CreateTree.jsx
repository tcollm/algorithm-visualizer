import { useEffect, useState } from "react";
import Tree from "react-d3-tree";

// TODO: append nodes using user input
// TODO: randomly build tree of set height

const traverse = (jsonObj, target) => {
  if (jsonObj !== null && typeof jsonObj === "object") {
    if (jsonObj.name === target) {
      // console.log("found target:", jsonObj);
      return jsonObj; // Return the found node immediately
    }

    // return the result of traversing the children recursively
    for (let [key, value] of Object.entries(jsonObj)) {
      const result = traverse(value, target);
      if (result) return result; // If a result is found, propagate it up (fixes issue where function returned null)
    }
  }

  return null; // Couldn't find target
};

const append = (parentName, nodeName, treeData) => {
  // parentAddress = traverse(treeData, parent);
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

      if (parent.children.length == 2) {
        swapChildren(parent); // format children
      }
    }

    return; // Success
  } else {
    // console.log("Parent not found.");
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
const createRandomTree = (tree) => {
  let height = calculateHeight(tree);
  const validValues = [];
  for (let i = 1; i <= 100; i++) {
    validValues.push(i);
  }

  // TODO: get all of the node values from the tree and remove them from the validValues array
  // (allows an existing tree to be created)

  // checkAllNodes(tree) function, returns array of tree values

  validValues.splice(tree.name, 1); // delete root from array

  // get random value, append to tree and remove from array
  while (height < 5) {
    let randIndex = Math.floor(Math.random() * validValues.length);
    append(tree.name, validValues[randIndex], tree);
    validValues.splice(randIndex, 1);
    height = calculateHeight(tree);
  }
};

const BST = () => {
  const treeData = {
    name: Math.floor(Math.random() * 100) + 1,
    children: [],
  };

  createRandomTree(treeData);

  const allNodes = checkAllNodes(treeData);
  console.log("All nodes:", allNodes);

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
        data={treeData}
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

export default BST;
