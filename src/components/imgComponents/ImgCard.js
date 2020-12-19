import React, { Component } from "react";

class ImgCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imgRef = React.createRef();
    this.yes = React.createRef();
  }

  componentDidMount() {
    this.imgRef.current.addEventListener("load", () => {
      const height = this.imgRef.current.clientHeight;
      const spans = Math.ceil(height / 10);
      this.setState({ spans });
    });
  }

  render() {
    const { description, urls } = this.props.img;

    return (
      <div
        className="imgCard"
        onClick={() => this.props.downloadModalHandler(this.props.img)}
        style={{
          gridRowEnd: `span ${this.state.spans + 2}`,
          margin: "0 auto 10px",
        }}
      >
        <img ref={this.imgRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImgCard;
