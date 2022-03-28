import React, { Component } from "react";
import styles from "./Sidebar.module.css";
import Navigation from "../../molecules/Navigation/Navigation";

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Navigation />
      </div>
    );
  }
}

export default Sidebar;
