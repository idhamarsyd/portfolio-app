import React, { Component } from "react";
import styles from "./Card.module.css";
import Subheadline from "../../atoms/Subheadline/Subheadline";
import BodyText from "../../atoms/BodyText/BodyText";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <Subheadline label={this.props.title} color="#6666ff" />
            <Subheadline
              label={this.props.subtitle}
              color="#212121"
              opacity={0.4}
            />
          </div>
          <BodyText content={this.props.year} color="#212121" />
        </div>
        <div className={styles.content}>
          <BodyText
            content={this.props.description}
            color="#212121"
            opacity={0.4}
          />
        </div>
      </div>
    );
  }
}

export default Card;
