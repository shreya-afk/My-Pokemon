import React from "react";
import PropTypes from "prop-types";
import styles from "./Hints.module.css";

const Hints = (props) => {
  return <div className={styles.Hints}>
    <h3>Helpful Hints</h3>
    <a href="https://pokeapi.co/api/v2/ability/7/">limber</a>

  </div>;
};

Hints.propTypes = {};

export default Hints;
