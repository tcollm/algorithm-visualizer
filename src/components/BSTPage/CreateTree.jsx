import { useEffect, useState } from "react";
import Tree from "react-d3-tree";

// TODO: traverse through treeData to append new nodes dynamically

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

const arrayTraverse = ()

const append = (parentName, nodeName, treeData) => {
  // parentAddress = traverse(treeData, parent);
  const parent = traverse(treeData, parentName);

  const newNode = {
    name: nodeName,
    children: [],
  };

  if (parent) {
    parent.children.push(newNode);

    // formatChildren(parent); // check if children need to be swapped
    // console.log("Node appended:", newNode);
    return 0; // Success
  } else {
    // console.log("Parent not found.");
    return -1; // Failure, parent does not exist
  }
};

// correctly append children to parent based on binary tree rules
// const formatChildren = (parentNode) => {
//   // const left = parentNode.children[0];
//   // const right = parentNode.children[1];
//   // if parseInt(left.name) > parseInt(right.name):
//   // const temp = left.name;
//   // left.name = right.name;
//   // right.name = temp;
//   // if parentNode.children.length > 2:
//   // const otherChildren = parentNode.children.slice(1)
//   //
// };

// TODO: store data as an array of elements and then convert to a json object
const BST = () => {
  const treeData = {
    name: "root",
    children: [
      {
        name: "1",
        children: [
          {
            name: "3",
            children: [],
          },
          {
            name: "5",
            children: [],
          },
        ],
      },
    ],
  };

  // randomly append data until height is 10 or something, use hashset to avoid reusing data, append nums 1-100
  // TODO: still need to ensure that nodes append like a binary tree (greater on right, smaller on left)

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
          y: dimensions.height * 0.1, // 10vh
        }}
        zoomable={false}
        draggable={false}
        orientation="vertical"
      />
    </div>
  );
};

export default BST;

// new set up:
// - create first and manage that as a binary tree
// - then once all calculations done (traverse and append),
//  build out the json object which will create the tree
