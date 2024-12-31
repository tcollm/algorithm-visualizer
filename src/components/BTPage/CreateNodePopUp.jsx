import { useState } from "react";
import { append, traverse } from "./treeUtils";

// eslint-disable-next-line react/prop-types
const CreateNodePopUp = ({ tree, setTree }) => {
  // create node button
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setInputValue(""); // Clear the input field
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nodeValue = parseInt(inputValue, 10);
    const nodeValueStr = nodeValue.toString();

    if (isNaN(nodeValue) || nodeValue < 1 || nodeValue > 100) {
      alert("Please enter a valid integer (1-100).");
    } else if (traverse(tree, nodeValueStr)) {
      alert("Please enter a unique integer that does not exist on the tree.");
    } else {
      const newTree = JSON.parse(JSON.stringify(tree));
      append(newTree.name, nodeValueStr, newTree);
      setTree(newTree); // update tree state
    }
    handleClosePopup();
  };

  return (
    <div>
      <button onClick={handleOpenPopup}>Create Node</button>

      {isPopupOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            zIndex: 1000,
          }}
        >
          <form onSubmit={handleSubmit}>
            <label>
              Enter Node Value (1-100):
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
            </label>
            <div style={{ marginTop: "10px" }}>
              <button type="submit">Submit</button>
              <button
                type="button"
                onClick={handleClosePopup}
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {isPopupOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={handleClosePopup}
        ></div>
      )}
    </div>
  );
};

export default CreateNodePopUp;
