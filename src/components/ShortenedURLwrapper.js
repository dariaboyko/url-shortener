import classes from "./ShortenedURL.module.css";
function ShortenedURLwrapper(props) {
  return (
    <section>
      <div className={classes.background}></div>
      <div className={classes.window}> {props.children}</div>
    </section>
  );
}

export default ShortenedURLwrapper;
