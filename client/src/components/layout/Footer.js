import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer className="bg-dark text-white mt-5 p-4 text-center">
          Copyright &copy; {new Date().getFullYear()} DevConnector
          <br /> Made with{" "}
          <img
            className="imgClass"
            src="http://www.clker.com/cliparts/D/H/K/c/a/j/red-heart-fire.svg"
            alt="love"
          />{" "}
          by Nihal
        </footer>
      </div>
    );
  }
}

export default Footer;
