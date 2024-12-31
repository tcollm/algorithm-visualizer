import ItemBox from "../ItemBox/ItemBox";
import classes from "./HomePage.module.css";
import binaryTreeImg from "/src/assets/binary-tree.jpg";

const algorithms = [
  {
    title: "Search Algorithms",
    desc: "Build or generate binary trees and visualize DFS and BFS traversals interactively.",
    img: binaryTreeImg,
    link: "bt",
  },
  {
    title: "Sorting Algorithms",
    desc: "Sorting Algorithms description",
    img: null,
    link: "sort",
  },
];

const HomePage = () => {
  return (
    <section className="body">
      <h1>Algorithm Visualizer</h1>
      <section className={classes.boxes}>
        {algorithms.map((algo, index) => (
          <ItemBox
            key={index}
            title={algo.title}
            desc={algo.desc}
            img={algo.img}
            link={algo.link}
          />
        ))}
      </section>
    </section>
  );
};

export default HomePage;
