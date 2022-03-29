import React, { Component } from "react";
import styles from "./LinkText.module.css";
import { NavLink } from "react-router-dom";

class LinkText extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.root}>
        <NavLink
          to={this.props.url}
          className={({ isActive }) => (isActive ? styles.active : styles.text)}
        >
          {this.props.label}
        </NavLink>
      </div>
    );
  }
}

export default LinkText;
