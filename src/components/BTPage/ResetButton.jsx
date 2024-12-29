// reset the colors of the nodes to default
import { resetColors } from "./treeUtils";

/* eslint-disable react/prop-types */
export const ResetButton = ({ tree, setTree }) => {
  const handleResetColors = () => {
    resetColors(setTree, tree);
  };
  return <button onClick={handleResetColors}>Reset</button>;
};
