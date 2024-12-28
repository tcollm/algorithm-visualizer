export const BFS = (tree, TARGET) => {
  // yellow = to be visited
  // red = visited

  let queue = [tree]; // temporary storage of nodes

  while (queue.length > 0) {
    const currNode = queue.shift();

    // currNode.color = "yellow"; // node is set to be visited

    if (currNode.name === TARGET) {
      console.log("Found target: %s", currNode);
      return;
      //  return array of statuses of nodes (visited, to be visited)
    }

    // currNode.color = "red"; // node has been visited and processed/checked

    if (currNode.children[0]) {
      queue.push(currNode.children[0]);
    }
    if (currNode.children[1]) {
      queue.push(currNode.children[1]);
    }
  }
  console.log("No target found!");
  return;
  //  return array of statuses of nodes (visited, to be visited)
};

// For managing state of tree and changing colors:
// // Example of algorithm to update node color (BFS or DFS)
// const updateNodeColors = (algorithmResult) => {
//   console.log("button clicked!");
//   const updatedTree = updateTreeColors(tree, algorithmResult);
//   setTree(updatedTree);
// };

// // Function to update the colors in the tree structure
// const updateTreeColors = (tree, algorithmResult) => {
//   const updatedTree = { ...tree };

//   // Example of how you could update nodes based on algorithm results
//   const updateNode = (node) => {
//     if (algorithmResult.visitedNodes.includes(node.name)) {
//       node.color = VISITED_NODE; // Visited nodes are red
//     }
//     if (node.children.length > 0) {
//       node.children.forEach(updateNode); // Recursively update child nodes
//     }

//     if (algorithmResult.root.includes(node.name)) {
//       node.color = VISITED_NODE;
//     } else {
//       node.color = TO_BE_VISITED_NODE;
//     }
//   };

//   updateNode(updatedTree);
//   return updatedTree;
// };
