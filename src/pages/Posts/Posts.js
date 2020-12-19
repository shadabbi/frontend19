import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import classes from "./Posts.module.scss";
import Spinner from "../../components/Spinner/Spinner";
import Post from "../../components/Post/Post";
import Modal from "../../components/Modal/Modal";
import Backdrop from "../../components/Backdrop/Backdrop";

function Posts(props) {
  const [spinner, setSpinner] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      props.setPosts(res.data);
      setSpinner(false);
    });
  }, []);

  const getModalData = (id) => {
    console.log(id);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => {
        setModalData(res.data);
      });
  };

  const OpenModalHandler = (id) => {
    setOpenModal(true);
    getModalData(id);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };

  console.log(modalData);

  const el = spinner ? (
    <Spinner />
  ) : (
    <div className={classes.posts}>
      {props.posts.map((post) => (
        <Post
          key={post.id}
          OpenModalHandler={OpenModalHandler}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
      {openModal ? (
        <Modal open>
          {modalData ? (
            modalData.map((post) => (
              <Post id={post.id} email={post.email} body={post.body} />
            ))
          ) : (
            <Spinner />
          )}
        </Modal>
      ) : null}
      {openModal ? <Backdrop closeModalHandler={closeModalHandler} /> : null}
    </div>
  );
  return el;
}

const mapSateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPosts: (data) => {
      dispatch({ type: "setPosts", payload: data });
    },
  };
};

export default connect(mapSateToProps, mapDispatchToProps)(Posts);
