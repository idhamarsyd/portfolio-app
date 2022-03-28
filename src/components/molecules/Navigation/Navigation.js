import React, { Component } from "react";
import styles from "./Navigation.module.css";
import VerticalNavBar from "../VerticalNavBar/VerticalNavBar";
import Profile from "../../atoms/Profile/Profile";

class Navigation extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Profile />
        <VerticalNavBar />
      </div>
    );
  }
}

export default Navigation;
