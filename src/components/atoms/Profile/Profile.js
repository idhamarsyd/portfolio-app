import React, { Component } from "react";
import styles from "./Profile.module.css";
import { UserIcon } from "@heroicons/react/outline";

class Profile extends Component {
  render() {
    return (
      <div className={styles.root}>
        <UserIcon className={styles.icon} />
        <h1 className={styles.name}>Idham Ar Rasyid</h1>
      </div>
    );
  }
}

export default Profile;
