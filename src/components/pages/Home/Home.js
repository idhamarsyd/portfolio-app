import React, { Component } from "react";
import styles from "./Home.module.css";
import Headline from "../../atoms/Headline/Headline";
import BodyText from "../../atoms/BodyText/BodyText";

class Home extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Headline label="Hello!" />
        <div className={styles.contacts}>
          <div className={styles.content}>
            <BodyText content="+6281342048761" color="#6666ff" />
          </div>
          <div className={styles.content}>
            <BodyText content="idhamrasyids@gmail.com" color="#6666ff" />
          </div>
        </div>
        <BodyText
          content="Currently pursing my 6th semester as a Informatics Engineering student, also learning Product Design & React."
          color="#212121"
          width={520}
        />
        <BodyText
          content="Select the menu on the left to explore my portfolio!"
          opacity={0.4}
        />
      </div>
    );
  }
}

export default Home;
