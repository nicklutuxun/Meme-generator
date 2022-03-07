import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Meme from "./components/Meme";
import Search from "./components/Search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meme :
        {
          url: "",
          topText: "",
          bottomText: ""
        }
    };
  }

  render() {
    return (
      <>
        <Header />
        <Search updateUI={this.updateMeme}/>
        <Meme meme={this.state.meme}/>
        <Footer />
      </>
    );
  }

  updateMeme = (data, top_Text, bottom_Text) => {
    this.setState({
      meme : {
        ...this.state.meme,
        url : data.url,
        topText : top_Text,
        bottomText : bottom_Text
      }
    });
  };
  
}

export default App;
