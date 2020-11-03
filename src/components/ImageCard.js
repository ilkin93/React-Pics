import React, { Component } from "react";

class ImageCard extends Component {
  constructor() {
    super();
    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", () => {
      const high = this.imageRef.current.clientHeight;
      const spans = Math.ceil(high / 10 + 1);
      this.setState({ spans });
    });
  }

  //   setSpans = () => {
  //     console.log("dsdsdsdsds");
  //   };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
