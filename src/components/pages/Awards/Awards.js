import React, { Component } from "react";
import styles from "./Awards.module.css";
import Headline from "../../atoms/Headline/Headline";
import Card from "../../molecules/Card/Card";

class Awards extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Headline label="Awards" />
        <Card
          title="1st Winner UX/UI Design Competition"
          subtitle="HMTI"
          year="2021"
          description="Designed a case study of Improving Registering Process of Local Hospital."
        />
        <Card
          title="Participant"
          subtitle="Telkom Design Challenge"
          year="2021"
          description="Participated on a Design Challenge of designing a Digital Internet Provider App"
        />
      </div>
    );
  }
}

export default Awards;
