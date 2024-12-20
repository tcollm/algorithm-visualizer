import Tree from "react-d3-tree";

const treeData = {
  name: "root",
  children: [
    {
      name: "1",
      children: [
        {
          name: "3",
        },
        {
          name: "5",
        },
      ],
    },
  ],
};

const containerStyles = {
  width: "100%",
  height: "100vh",
};

// TODO: fix centering, translate is not dynamic

const BST = () => {
  return (
    <div className="treeWrapper" style={containerStyles}>
      <Tree
        data={treeData}
        translate={{ x: window.innerWidth / 4, y: window.innerHeight / 4 }}
        zoomable={false}
        draggable={false}
        orientation="vertical"
      />
    </div>
  );
};

export default BST;
