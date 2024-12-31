// reset the colors of the nodes to default
import { resetColors } from "./treeUtils";

/* eslint-disable react/prop-types */
export const ResetButton = ({ tree, setTree }) => {
  const handleResetColors = () => {
    resetColors(tree, setTree);
  };
  return (
    <button style={{ marginLeft: "auto" }} onClick={handleResetColors}>
      Reset
    </button>
  );
};
