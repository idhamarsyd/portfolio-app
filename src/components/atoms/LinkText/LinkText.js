import React, { Component } from "react";
import styles from "./LinkText.module.css";

class LinkText extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.root}>
        <a href="#" className={styles.text}>
          {this.props.label}
        </a>
      </div>
    );
  }
}

export default LinkText;
