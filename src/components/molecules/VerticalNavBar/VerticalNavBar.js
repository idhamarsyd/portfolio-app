import React, { Component } from "react";
import styles from "./VerticalNavBar.module.css";
import LinkText from "../../atoms/LinkText/LinkText";

class VerticalNavBar extends Component {
  render() {
    return (
      <div className={styles.root}>
        <LinkText label="Home" />
        <LinkText label="About" />
        <LinkText label="Experience" />
        <LinkText label="Skills" />
        <LinkText label="Interest" />
        <LinkText label="Awards" />
      </div>
    );
  }
}

export default VerticalNavBar;
