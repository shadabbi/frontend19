import React from "react";

import classes from "./Backdrop.module.scss";

function Backdrop({ closeModalHandler }) {
  return (
    <div onClick={() => closeModalHandler()} className={classes.backdrop}></div>
  );
}

export default Backdrop;
