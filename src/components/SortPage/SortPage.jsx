import { useCallback, useEffect, useState } from "react";
import PageLayout from "../AlgoPageLayout/PageLayout.jsx";
import classes from "./SortPage.module.css";
import {
  ARRAY_SIZE,
  MAX_VAL,
  BAR_HEIGHT,
  DEFAULT_BAR,
  MIN_VAL,
} from "./constants.js";

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// This page will create a binary tree using D3.js and then the user can choose to use BFS or DFS to find a target element
const SortPage = () => {
  const [array, setArray] = useState([]);

  const resetArray = useCallback(() => {
    const newArray = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
      const randomVal = randomIntFromInterval(MIN_VAL, MAX_VAL);
      newArray.push(randomVal);
    }
    console.log(newArray);
    setArray(newArray);
  }, []);

  useEffect(() => {
    resetArray();
  }, [resetArray]);

  const leftContent = (
    <>
      <h1>Sorting Algorithms</h1>
      <p>Description</p>
      <button onClick={resetArray}>Reset</button>
    </>
  );

  const rightContent = (
    <div className={classes.arrayContainer}>
      <div>
        {array.map((value, index) => (
          <div
            className={classes.arrayBar}
            key={index}
            style={{
              height: `${(value / MAX_VAL) * 50 + 3}vh`, // Set height proportionate to MAX_VAL
              // width: `${Math.min(100 / ARRAY_SIZE, 20)}px`, // Dynamically adjust bar width based on array size
            }}
          >
            <div className={classes.barText}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return <PageLayout leftContent={leftContent} rightContent={rightContent} />;
};

export default SortPage;
