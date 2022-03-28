import React, { Component } from "react";

export class Refcomponent extends Component {
  state = {
    inputref: React.createRef(),
    cbref: null,
    getref: (element) => {
      this.cbref = element;
    },
  };

  render() {
    console.log(`this.state.inputref`, this.state.inputref);
    return (
      <>
        <input type="text" ref={this.inputref} />
        <input type="button" ref={this.cbref} />
      </>
    );
  }
}

export default Refcomponent;
