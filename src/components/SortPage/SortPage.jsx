import { useCallback, useEffect, useState } from "react";
import PageLayout from "../AlgoPageLayout/PageLayout.jsx";
import classes from "./SortPage.module.css";
import { ARRAY_SIZE, DEFAULT_BAR, MAX_VAL, MIN_VAL } from "./constants.js";
import { mergeSort } from "./mergeSort.js";

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// This page will create a binary tree using D3.js and then the user can choose to use BFS or DFS to find a target element
const SortPage = () => {
  const [array, setArray] = useState([]);

  // useCallback ensures that reset only occurs onMount (and when clicked)
  const resetArray = useCallback(() => {
    const newArray = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
      const randomVal = randomIntFromInterval(MIN_VAL, MAX_VAL);
      newArray.push({ value: randomVal, color: DEFAULT_BAR });
    }
    setArray(newArray);
  }, []);

  useEffect(() => {
    resetArray();
  }, [resetArray]);

  const handleMergeSort = () => {
    const newArray = [...array];
    console.log("Array before sort: ", newArray);
    mergeSort(newArray, 0, newArray.length - 1);
    console.log("Array after sorting: ", newArray);
    setArray(newArray);
  };

  const leftContent = (
    <>
      <h1>Sorting Algorithms</h1>
      <p>Description</p>
      <button onClick={handleMergeSort}>Merge Sort</button>
      <button onClick={resetArray}>Reset</button>
    </>
  );

  const rightContent = (
    <div className={classes.arrayContainer}>
      <div>
        {array.map((bar, index) => (
          <div
            className={classes.arrayBar}
            key={index}
            style={{
              height: `${(bar.value / MAX_VAL) * 50 + 3}vh`, // Set height proportionate to MAX_VAL (+3 makes small values more visible)
              backgroundColor: bar.color,
            }}
          >
            <div className={classes.barText}>{bar.value}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return <PageLayout leftContent={leftContent} rightContent={rightContent} />;
};

export default SortPage;
