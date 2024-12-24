import { MAX_TREE_HEIGHT } from "./constants";
import { append, calculateHeight } from "./treeUtils";

// create tree of height 5
export const createRandomTree = (tree) => {
  // helper: create an array of all of the node values in the tree
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

  // get random value, append to tree and remove from array
  while (height < MAX_TREE_HEIGHT) {
    let randIndex = Math.floor(Math.random() * validValues.length);

    // console.log(
    //   "CreateRandomTree: tree at height %s: %s",
    //   height,
    //   JSON.stringify(tree, null, 2)
    // );

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
