import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import classes from "./Home.module.scss";
import Spinner from "../../components/Spinner/Spinner";

function Home(props) {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=l4wTyBAS1TbGEWNRvVgwCenkehTJjmmaNNLgQR4N"
      )
      .then((res) => {
        console.log(res.data);
        props.setHome(res.data);
        setSpinner(false);
      });
  }, []);
  const el = spinner ? (
    <Spinner />
  ) : (
    <div
      style={{ backgroundImage: `url(${props.home.hdurl})` }}
      className={classes.home}
    >
      <h1>{props.home.title}</h1>
      <p>{props.home.explanation}</p>
    </div>
  );
  return el;
}

const mapSateToProps = (state) => {
  return {
    home: state.home,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHome: (data) => {
      dispatch({ type: "setHome", payload: data });
    },
  };
};

export default connect(mapSateToProps, mapDispatchToProps)(Home);
