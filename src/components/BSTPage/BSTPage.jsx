import { useState } from "react";
import classes from "./BSTPage.module.css";
import { BST, createRandomTree } from "./CreateTree";
import CreateNodePopUp from "./CreateNodePopUp";

const treeData = {
  name: Math.floor(Math.random() * 100) + 1,
  children: [],
};

// This page will create a binary tree using D3.js and then the user can choose to use BFS or DFS to find a target element
const BSTPage = () => {
  const [tree, setTree] = useState(treeData);

  // generate tree button
  const handleGenerateTree = () => {
    const newTree = { name: Math.floor(Math.random() * 100) + 1, children: [] };
    createRandomTree(newTree);
    setTree(newTree);
  };

  return (
    <div className={classes.container}>
      <section className={classes.leftDisplay}>
        <h1>Binary Tree</h1>
        <p>
          To the left is a binary tree that will demonstrate Breadth First
          Search (BFS) or Depth First Search (DFS).
        </p>
        <CreateNodePopUp tree={tree} setTree={setTree} />
        <button onClick={handleGenerateTree}>Create Random Tree</button>
      </section>
      <div className={classes.separator}></div>
      <section className={classes.rightDisplay}>
        <BST tree={tree} />
      </section>
    </div>
  );
};

export default BSTPage;
