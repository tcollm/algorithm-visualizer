// reset the colors of the nodes to default
import { resetColors } from "./treeUtils";

/* eslint-disable react/prop-types */
const ResetButton = ({ tree, setTree }) => {
  const handleResetColors = () => {
    resetColors(tree, setTree);
  };
  return (
    <button
      style={{ marginLeft: "auto", marginBottom: "20px" }}
      onClick={handleResetColors}
    >
      Reset
    </button>
  );
};

export default ResetButton;
