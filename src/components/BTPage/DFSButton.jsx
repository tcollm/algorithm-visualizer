import { useState } from "react";
import styles from "./SearchButton.module.css";

export const DFSButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleDFS = () => {
    const targetValue = parseInt(inputValue, 10);
    if (targetValue >= 1 && targetValue <= 100) {
      // DFS();
      setIsModalOpen(false);
    } else {
      alert("Please enter a valid integer (1-100).");
    }
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>DFS</button>
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
            <button onClick={handleDFS}>Submit</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};
