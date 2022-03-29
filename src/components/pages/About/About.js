import React, { Component } from "react";
import styles from "./About.module.css";
import Headline from "../../atoms/Headline/Headline";
import BodyText from "../../atoms/BodyText/BodyText";

class About extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Headline label="About Me" />
        <BodyText
          content="My name is Idham Ar Rasyid, friends call me in many ways such as Idham, Dhamar, or even Lucas lol. I was born in Indonesia and stay until now, for over 21 years you know how it felt like?"
          width={560}
        />
        <BodyText
          content="For college I didn't do that much, mostly yes I design thing, not only artwork (banner, logo, etc.) but I design experience and management, I love to have a structure for my workflow, keep it simple and tidy, managing people is something I still learn to be master for"
          width={560}
        />
      </div>
    );
  }
}

export default About;
