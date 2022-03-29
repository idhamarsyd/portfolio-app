import React, { Component } from "react";
import styles from "./VerticalNavBar.module.css";
import LinkText from "../../atoms/LinkText/LinkText";

class VerticalNavBar extends Component {
  render() {
    return (
      <div className={styles.root}>
        <LinkText label="Home" url="/" />
        <LinkText label="About" url="/about" />
        <LinkText label="Experience" url="/experience" />
        <LinkText label="Skills" url="/skills" />
        <LinkText label="Interest" url="/interest" />
        <LinkText label="Awards" url="/awards" />
      </div>
    );
  }
}

export default VerticalNavBar;
