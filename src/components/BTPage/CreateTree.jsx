/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Tree from "react-d3-tree";

export const BT = ({ tree }) => {
  // FOR TESTING:
  // const rootValue = 65;
  // for (int i = 1; i < 100; i++) {
  //   if (i !== rootValue) {
  //     append("65", i.toString(), treeData);
  //   }
  // }

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
        data={tree}
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
