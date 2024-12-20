import ItemBox from "../ItemBox/ItemBox";
import classes from "./HomePage.module.css";

const algorithms = [
  {
    title: "Binary Search",
    desc: "description of Binary Search.",
    img: "null",
    link: "bst",
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
