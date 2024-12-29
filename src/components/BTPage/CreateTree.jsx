/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { DEFAULT_NODE } from "./constants";
import Tree from "react-d3-tree";

export const BT = ({ tree }) => {
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

  // allows for color to dynamically be updated
  const renderNodeWithCustomEvents = ({ nodeDatum }) => (
    <g>
      <circle r="15" fill={nodeDatum.color || DEFAULT_NODE} />
      <text fill="black" strokeWidth="1" x="20">
        {nodeDatum.name}
      </text>
    </g>
  );

  return (
    <div className="treeWrapper" style={containerStyles}>
      <Tree
        data={tree}
        translate={{
          x: dimensions.width * 0.31, // 31vw
          y: dimensions.height * 0.03, // 3vh
        }}
        renderCustomNodeElement={(treeProps) =>
          renderNodeWithCustomEvents(treeProps)
        }
        orientation="vertical"
      />
    </div>
  );
};
