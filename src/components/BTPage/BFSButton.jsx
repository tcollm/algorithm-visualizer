// Create pop up when user clicks BFS button to get an input
import { useState } from "react";
// import { BFS } from "./BFS";
import { DelayedBFS } from "./DelayedBFS";
import styles from "./SearchButton.module.css";
import { resetColors } from "./treeUtils";

// eslint-disable-next-line react/prop-types
export const BFSButton = ({ tree, setTree }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleBFS = () => {
    const targetValue = parseInt(inputValue, 10);
    if (targetValue >= 1 && targetValue <= 100) {
      resetColors(tree, setTree);
      DelayedBFS(tree, setTree, targetValue.toString());
      setIsModalOpen(false); // Close modal after running BFS
    } else {
      alert("Please enter a valid integer (1-100).");
    }
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>BFS</button>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Enter a value between 1 and 100:</h3>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              min="1"
              max="100"
            />
            <button onClick={handleBFS}>Submit</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};
