import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";



class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toptext: "",
      bottomtext: ""
    }
  }

  changeText = (event) => {
    let id = event.target.id;
    if (id === "top-input") {
      this.setState({toptext : event.target.value});
    } else if (id === "bottom-input") {
      this.setState({bottomtext : event.target.value});
    }
  }

  fetchMemes = async (event) => {
    event.preventDefault();
    const memeAPI = "https://api.imgflip.com/get_memes";
    
    try {
      const response = await axios.get(`${memeAPI}`);
      const data = response.data;
      this.props.updateUI(data.data.memes[Math.floor(Math.random() * data.data.memes.length)], this.state.toptext, this.state.bottomtext);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <section className="section">
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input is-large is-fullwidth is-family-monospace"
              id="top-input"
              placeholder="Top text"
              type="text"
              value={this.state.toptext}
              onChange={this.changeText}
            />
          </div>
        </div>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input is-large is-fullwidth is-family-monospace"
              id="bottom-input"
              placeholder="Bottom text"
              type="text"
              value={this.state.bottomtext}
              onChange={this.changeText}
            />
          </div>
        </div>
        <div className="field has-addons">
          <div className="control is-expanded">
            <button 
              className="button is-link is-large is-fullwidth" 
              id="go-btn"
              onClick={this.fetchMemes}
            >
              Go!
            </button>
          </div>
        </div>
      </section>
    );
    }
}

export default Search;

Search.propTypes = {
  updateUI: PropTypes.func.isRequired
};