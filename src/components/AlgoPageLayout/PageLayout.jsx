import classes from "./PageLayout.module.css";

// Reusable page layout with left and right displays for each algorithm
// eslint-disable-next-line react/prop-types
const PageLayout = ({ leftContent, rightContent }) => {
  return (
    <div className={classes.container}>
      {/* Left Content */}
      <section className={classes.leftDisplay}>{leftContent}</section>

      {/* Separator */}
      <div className={classes.separator}></div>

      {/* Right Content */}
      <section className={classes.rightDisplay}>{rightContent}</section>
    </div>
  );
};

export default PageLayout;
