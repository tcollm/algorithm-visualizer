import { useEffect, useState } from "react";
import Tree from "react-d3-tree";

// TODO: fix centering, translate is not dynamic

const BST = () => {
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
          x: dimensions.width * 0.3, // 30vw
          y: window.innerHeight * 0.1, // 10vh
        }}
        zoomable={false}
        draggable={false}
        orientation="vertical"
      />
    </div>
  );
};

export default BST;
