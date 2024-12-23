import { useState } from "react";
import { append } from "./CreateTree";

// eslint-disable-next-line react/prop-types
const CreateNodePopUp = ({ newNodeValue, treeData }) => {
  // create node button
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Function to open the pop-up
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the pop-up
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setInputValue(""); // Clear the input field
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const integerValue = parseInt(inputValue, 10);
    if (isNaN(integerValue) || integerValue < 1 || integerValue > 100) {
      alert("Please enter a valid integer.");
    } else {
      append(newNodeValue, treeData);
      // You can process the integerValue here (e.g., append to a tree, update state, etc.)
    }
    handleClosePopup(); // Close the pop-up after submission
  };

  return (
    <div>
      <button onClick={handleOpenPopup}>Enter Integer</button>

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
              Enter an Integer:
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
