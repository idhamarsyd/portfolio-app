import React, { Component } from "react";
import styles from "./Experience.module.css";
import Headline from "../../atoms/Headline/Headline";
import Card from "../../molecules/Card/Card";

class Experience extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Headline label="Experience" />
        <Card
          title="UX/UI Designer"
          subtitle="Gudangmu.id"
          year="2021"
          description="Designed a landing page for a warehouse service company that targeted online stores."
        />
        <Card
          title="Graphic Designer Lead"
          subtitle="Anniversary Event, College"
          year="2021"
          description="Designed & manage the publication for Anniversary Event of Engineering Faculty, Halu Oleo University."
        />
      </div>
    );
  }
}

export default Experience;
