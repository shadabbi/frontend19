import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import classes from "./Albums.module.scss";
import Spinner from "../../components/Spinner/Spinner";
import Post from "../../components/Post/Post";

function Albums(props) {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
      props.setAlbums(res.data);
      setSpinner(false);
    });
  }, []);

  const el = spinner ? (
    <Spinner />
  ) : (
    <div className={classes.albums}>
      {props.albums.map((album) => (
        <Post key={album.id} title={album.title} />
      ))}
    </div>
  );
  return el;
}

const mapSateToProps = (state) => {
  return {
    albums: state.posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAlbums: (data) => {
      dispatch({ type: "setPosts", payload: data });
    },
  };
};

export default connect(mapSateToProps, mapDispatchToProps)(Albums);
