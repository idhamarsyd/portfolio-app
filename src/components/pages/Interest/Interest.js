import React, { Component } from "react";
import styles from "./Interest.module.css";
import Headline from "../../atoms/Headline/Headline";
import BodyText from "../../atoms/BodyText/BodyText";
import CheckList from "../../molecules/CheckList/CheckList";

class Interest extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Headline label="Interests" />
        <BodyText
          content="If we have the same interests, what would you do?👀"
          color="#212121"
          opacity={0.4}
        />
        <CheckList label="Pop, RnB, EDM Songs" />
        <CheckList label="Thriller, Horror, Psychology Movies" />
        <CheckList label="Open World Games" />
      </div>
    );
  }
}

export default Interest;
