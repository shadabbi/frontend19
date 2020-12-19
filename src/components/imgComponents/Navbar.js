import React from "react";
import { Component } from "react";
// import brand from '../assets/img/brand.png'

class Navbar extends Component {
  state = {
    term: null,
  };

  submitHandler = (e, random = false) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term, true);
    if (random) {
      this.props.onSearchSubmit("random", false);
    }
    this.setState({ term: "" });
  };
  render() {
    return (
      <div className="Searchbar mx-2">
        <div className="Brand" onClick={(e) => this.submitHandler(e, true)}>
          <img src={"brand"} alt="brand" />
        </div>
        <form onSubmit={this.submitHandler}>
          <div className="input d-flex">
            {/* <span><i class="fa fa-search" aria-hidden="true"></i></span> */}
            <input
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="Search free hight-resolution photos"
              type="text"
              className="form-control"
            />
          </div>

          <button onClick={this.submitHandler} className="btn">
            Search
          </button>
        </form>
        <div onClick={(e) => this.submitHandler(e, true)}>
          <a href="#" className="homeBtn">
            Home
          </a>
        </div>
        <div className="user">
          <img src={"brand"} alt="" />
        </div>
      </div>
    );
  }
}

export default Navbar;
