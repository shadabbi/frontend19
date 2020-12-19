import React, { Component } from "react";
import "./ImageList.css";

import InfiniteScroll from "react-infinite-scroll-component";

import ImgCard from "./ImgCard";
class ImageList extends Component {
  render() {
    const imgs = (
      <InfiniteScroll
        dataLength={this.props.images.length}
        next={() => {
          return this.props.onSearchSubmit(
            this.props.searchTerm,
            true,
            this.props.page + 1
          );
        }}
        hasMore={true}
        className="img-list"
      >
        {this.props.images.map((img, idx) => {
          return (
            <ImgCard
              length={this.props.images.length}
              idx={idx}
              downloadModalHandler={this.props.downloadModalHandler}
              onSearchSubmit={this.props.onSearchSubmit}
              searchTerm={this.props.searchTerm}
              page={this.props.page}
              key={img.id}
              img={img}
            ></ImgCard>
          );
        })}
      </InfiniteScroll>
    );

    return <div className="">{imgs}</div>;
  }
}

export default ImageList;
