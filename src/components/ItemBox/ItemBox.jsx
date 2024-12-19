/* eslint-disable react/prop-types */
// These boxes will be displayed on the home page of the website, showing the algorithms and a short description of them

import classes from "./ItemBox.module.css";

const ItemBox = ({ title, desc, img, link }) => {
  return (
    <a href={link} className={classes.box}>
      <img src={img} alt={title} className={classes.img} />
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.content}>
        <p className={classes.desc}>{desc}</p>
      </div>
    </a>
  );
};

export default ItemBox;
