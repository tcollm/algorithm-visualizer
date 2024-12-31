import classes from "../BTPage/BTPage.module.css";

// This page will create a binary tree using D3.js and then the user can choose to use BFS or DFS to find a target element
const SortPage = () => {
  return (
    <div className={classes.container}>
      <section className={classes.leftDisplay}>
        <h1>Sorting Algorithms</h1>
        <p>Description</p>
      </section>
      <div className={classes.separator}></div>
      <section className={classes.rightDisplay}></section>
    </div>
  );
};

export default SortPage;
