import React, { Component } from "react";
import styles from "./Skills.module.css";
import Headline from "../../atoms/Headline/Headline";
import BodyText from "../../atoms/BodyText/BodyText";
import CheckList from "../../molecules/CheckList/CheckList";

class Skills extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Headline label="Skills" />
        <BodyText
          content="My basic things that made me survived."
          color="#212121"
          opacity={0.4}
        />
        <CheckList label="Prototyping" />
        <CheckList label="Desk Research" />
        <CheckList label="Figma Design Tool" />
        <CheckList label="Collaboration & Leadership" />
        <CheckList label="Copywriting" />
      </div>
    );
  }
}

export default Skills;
