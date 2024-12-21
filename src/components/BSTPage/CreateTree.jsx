import { useEffect, useState } from "react";
import Tree from "react-d3-tree";

// TODO: create function to get height of tree
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

const BST = () => {
  const treeData = {
    name: "9",
    children: [],
  };

  append("9", "8", treeData);
  append("9", "7", treeData);
  append("9", "6", treeData);
  append("9", "5", treeData);
  append("9", "4", treeData);
  append("9", "3", treeData);
  append("9", "2", treeData);
  append("9", "1", treeData);
  append("9", "0", treeData);

  append("9", "10", treeData);
  append("9", "11", treeData);
  append("9", "12", treeData);
  append("9", "13", treeData);
  append("9", "14", treeData);
  append("9", "15", treeData);
  append("9", "16", treeData);
  append("9", "17", treeData);
  append("9", "18", treeData);

  append("9", "19", treeData);
  append("9", "20", treeData);
  append("9", "21", treeData);
  append("9", "22", treeData);
  append("9", "23", treeData);
  append("9", "24", treeData);
  append("9", "25", treeData);

  console.log(calculateHeight(treeData));

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
