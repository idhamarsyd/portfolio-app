import React, { Component } from "react";
import styles from "./Headline.module.css";

class Headline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.root}>
        <h1 className={styles.text}>{this.props.label}</h1>
      </div>
    );
  }
}

export default Headline;
