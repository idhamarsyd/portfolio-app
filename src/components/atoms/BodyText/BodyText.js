import React, { Component } from "react";
import styles from "./BodyText.module.css";

class BodyText extends Component {
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
        <p className={styles.text} style={style}>
          {this.props.content}
        </p>
      </div>
    );
  }
}

export default BodyText;
