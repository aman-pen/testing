import React from "react";

const _loaded = {};

class ImageLoader extends React.Component {
  //initial state: image loaded stage
  state = {
    loaded: _loaded[this.props.src],
  };

  //define our loading and loaded image classes
  static defaultProps = {
    className: "",
    loadingClassName: "aug2021-img-loading",
    loadedClassName: "aug2021-img-loaded",
  };

  //image onLoad handler to update state to loaded
  onLoad = () => {
    _loaded[this.props.src] = true;
    this.setState(() => ({ loaded: true }));
  };

  render() {
    let { className, loadedClassName, loadingClassName } = this.props;

    className = `${className} ${
      this.state.loaded ? loadedClassName : loadingClassName
    }`;

    return (
      <img
        src={this.props.src}
        onClick={this.props.onClick}
        className={className}
        onLoad={this.onLoad}
        alt=""
      />
    );
  }
}

export default ImageLoader;
