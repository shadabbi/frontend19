import { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Welcome from "./pages/Welcome/Welcome";
import Posts from "./pages/Posts/Posts";
import Albums from "./pages/Albums/Albums";
import Header from "./components/Header/Header";
import Photo from "./pages/Photo/Photo";
import { auth } from "./firebase/firebase";
import { setUserAsync } from "./redux/User/actions";

function App({ user, setUser }) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const { email, displayName } = userAuth;
        console.log(userAuth);
        setUser({ email: email, displayName: displayName });
      } else {
        setUser({ email: null, displayName: null });
      }
    });

    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <>
      {user.displayName ? (
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/photo" component={Photo} />
            <Route path="/posts" component={Posts} />
            <Route path="/albums" component={Albums} />
          </Switch>
        </>
      ) : (
        <Welcome />
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch({ type: "setUser", payload: user }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
