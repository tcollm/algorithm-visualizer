import classes from "./BSTPage.module.css";

const BSTPage = () => {
  return (
    <div className={classes.container}>
      <section className={classes.leftDisplay}>
        <h1>Binary Tree</h1>
        <p>
          To the left is a binary tree that will demonstrate Breadth First
          Search (BFS) or Depth First Search (DFS).
        </p>
        <div>This is where user input for node creation will go</div>
      </section>
      <div className={classes.separator}></div>
      <section className={classes.rightDisplay}>
        <div>Display tree</div>
      </section>
    </div>
  );
};

export default BSTPage;

// This page will create a binary tree using D3.js and then the user can choose to use BFS or DFS to find a target element

// binary tree:
// left is smaller than parent
// right is larger

// page functionality:
// create a root node of a random number 1-100
// ask users to enter a number (1-100):
//  - split the page into 2/3 (the left 1/3 will be the desc and user input, while the right 2/3 will display the tree)
//  - create a panel that takes user input (the int size of the node)
//  - store that input (in an array? )
// append a node to the tree in its correct position
//

// how to store user input:
//  - use an array, where

// additional functionality:
// - automatically create a tree (or finish creating a tree) of a set height
