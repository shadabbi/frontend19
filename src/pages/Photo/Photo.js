import React, { Component } from "react";
import Unsplash from "../../api/Unsplash";
import SearchBar from "../../components/imgComponents/SearchBar";
import ImageList from "../../components/imgComponents/ImageList";
import Modal from "../../components/imgComponents/Modal";
import Download from "../../components/imgComponents/Download";
import Backdrop from "../../components/imgComponents/Backdrop";
// import Navbar from "../../components/imgComponents/Navbar";
// import NavLinks from "../../components/imgComponents/NavLinks";

import "./Photo.scss";

class Photo extends Component {
  state = {
    images: [],
    loader: false,
    showModal: false,
    imgData: null,
    searchTerm: null,
    page: null,
    searched: false,
  };
  onSearchSubmit = async (term, searched, page = 1) => {
    this.setState({ page: page, loader: true });
    const response = await Unsplash.get("/search/photos", {
      params: { query: term, per_page: 20, page: this.state.page },
    });

    let imgs = [];
    if (term === this.state.searchTerm) {
      imgs = [...this.state.images, ...response.data.results];
    } else {
      imgs = [...response.data.results];
    }

    this.setState({
      images: imgs,
      loader: false,
      searchTerm: term,
      searched: searched,
    });
  };

  componentDidMount() {
    this.onSearchSubmit("random", false);
  }

  downloadModalHandler(img) {
    this.setState({ showModal: true, imgData: img });
  }

  closeModalHandler() {
    this.setState({ showModal: false });
  }

  render() {
    const searchBar = this.state.searched ? (
      <h1 className="my-3 text-uppercase">{this.state.searchTerm}</h1>
    ) : (
      <SearchBar onSubmit={this.onSearchSubmit} />
    );
    return (
      <div className=" ui" style={{ padding: "1rem" }}>
        {/* <Navbar onSearchSubmit={this.onSearchSubmit.bind(this)} /> */}
        {/* <NavLinks onSearchSubmit={this.onSearchSubmit.bind(this)} /> */}
        {/* {searchBar} */}
        <SearchBar onSubmit={this.onSearchSubmit} />

        <Modal show={this.state.showModal}>
          {this.state.imgData ? <Download img={this.state.imgData} /> : null}
        </Modal>
        <Backdrop
          closeModalHandler={this.closeModalHandler.bind(this)}
          show={this.state.showModal}
        />

        <ImageList
          images={this.state.images}
          downloadModalHandler={this.downloadModalHandler.bind(this)}
          searchTerm={this.state.searchTerm}
          page={this.state.page}
          onSearchSubmit={this.onSearchSubmit.bind(this)}
          loader={this.state.loader}
        />

        {this.state.loader ? (
          <i className="fa fa-spinner" aria-hidden="true"></i>
        ) : null}
      </div>
    );
  }
}

export default Photo;
