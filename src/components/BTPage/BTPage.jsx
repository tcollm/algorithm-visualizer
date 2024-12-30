import { useState } from "react";
import classes from "./BTPage.module.css";
import { BT } from "./CreateTree";
import CreateNodePopUp from "./CreateNodePopUp";
import { MAX_TREE_HEIGHT, DEFAULT_NODE } from "./constants";
import { calculateHeight } from "./treeUtils";
import { createRandomTree } from "./createRandomTree";
import { BFSButton } from "./BFSButton";
import { DFSButton } from "./DFSButton";
import { ResetButton } from "./ResetButton";

// This page will create a binary tree using D3.js and then the user can choose to use BFS or DFS to find a target element
const BTPage = () => {
  const [tree, setTree] = useState({
    name: (Math.floor(Math.random() * 100) + 1).toString(),
    color: DEFAULT_NODE,
    children: [],
  });

  // generate tree button
  const handleGenerateTree = () => {
    setTree((prevTree) => {
      let newTree;
      if (calculateHeight(prevTree) >= MAX_TREE_HEIGHT) {
        // allow user to destroy tree
        newTree = {
          name: (Math.floor(Math.random() * 100) + 1).toString(),
          color: DEFAULT_NODE,
          children: [],
        };
      } else {
        newTree = { ...prevTree };
      }
      createRandomTree(newTree);
      return newTree;
    });
  };

  return (
    <div className={classes.container}>
      <section className={classes.leftDisplay}>
        <h1>Binary Tree</h1>
        <p>
          Visualize tree traversal algorithms with an interactive binary tree
          builder. Create custom nodes or generate a random binary tree, then
          explore and execute Breadth-First Search (BFS) and Depth-First Search
          (DFS) to see how these algorithms work step-by-step.
        </p>
        <section className={classes.createTree}>
          <h2>Create Tree</h2>
          <div className={classes.buttonContainer}>
            <CreateNodePopUp tree={tree} setTree={setTree} />
            <button onClick={handleGenerateTree}>Create Random Tree</button>
          </div>
        </section>
        <section className={classes.searchAlgos}>
          <h2>Search Algorithms</h2>
          <div className={classes.BFSContainer}>
            <h3>BFS</h3>
            <p>
              Breadth-First Search (BFS) explores a tree level by level,
              starting with the root and checking all sibling nodes at each
              level before moving to the next. It uses a queue data structure
              that follows the first-in-first-out (FIFO) principle: nodes are
              added to the back of the queue as they are discovered, and the
              front node is removed for processing. Each processed node&apos;s
              children are then added to the queue. This process continues until
              the target element is found or all nodes have been explored. BFS
              is ideal for finding the shortest path in an unweighted tree or
              graph.
            </p>
            <BFSButton tree={tree} setTree={setTree} />
          </div>
          <div className={classes.DFSContainer}>
            <h3>DFS</h3>
            <p>
              Depth-First Search (DFS) explores a tree by traversing as deeply
              as possible along each branch before backtracking. Starting at the
              root, it uses a stack structure (either explicitly or through
              recursion) to keep track of nodes. DFS processes each child node
              before moving to its siblings, diving into one path at a time. The
              process continues until the target element is found or all nodes
              have been visited. DFS is useful for tasks like pathfinding in
              mazes or exploring connected components.
            </p>
            <DFSButton tree={tree} setTree={setTree} />
          </div>
          <ResetButton tree={tree} setTree={setTree} />
        </section>
      </section>
      <div className={classes.separator}></div>
      <section className={classes.rightDisplay}>
        <BT tree={tree} />
      </section>
    </div>
  );
};

export default BTPage;
