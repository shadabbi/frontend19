import React from "react";
import { Link, withRouter } from "react-router-dom";

import classes from "./Post.module.scss";

function Post({ title, id, body, location, match, OpenModalHandler, email }) {
  const path = match.path;

  return (
    // <Link to={`${path}/${id}`}>
    <div className={classes.post} onClick={() => OpenModalHandler(id)}>
      <h1>{title}</h1>
      <h2>{email}</h2>
      <p>{body}</p>
    </div>
    // </Link>
  );
}

export default withRouter(Post);
