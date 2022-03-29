import React, { Component } from "react";
import styles from "./Subheadline.module.css";

class Subheadline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      color: this.props.color,
      opacity: this.props.opacity ? this.props.opacity : 1,
      width: this.props.width ? this.props.width : "auto",
    };
    return (
      <div className={styles.root}>
        <h1 className={styles.text} style={style}>
          {this.props.label}
        </h1>
      </div>
    );
  }
}

export default Subheadline;
