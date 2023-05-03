import classes from "./navigation.module.css";

function Navigation() {
  return (
    <nav className={classes.nav}>
      <a href="/">Home</a>
      <p className={classes.header}>Random Data Generator</p>
      <a href="https://github.com/JoelKong" target="_blank">
        About Me
      </a>
    </nav>
  );
}

export default Navigation;
