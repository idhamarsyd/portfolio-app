import React, { Component } from "react";
import styles from "./CheckList.module.css";
import BodyText from "../../atoms/BodyText/BodyText";
import { CheckIcon } from "@heroicons/react/outline";

class CheckList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.root}>
        <CheckIcon className={styles.icon} />
        <BodyText content={this.props.label} color="#212121" />
      </div>
    );
  }
}

export default CheckList;
