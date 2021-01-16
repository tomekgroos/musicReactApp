import React from 'react';
import './App.css';
import Logo from '../img/logo white.png';

import PlayList from "../PlayList/PlayList";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    }
  }

render() {
  return (
    
    <div>
  <img className="logo" src={Logo} alt="logo"/>
     <h1 className="highlight">(Not) Spotify Player</h1>

  <div class="App">
    {/* Add a SearchBar component */}
    <div className="App-playlist">
      {/*  Add a SearchResults component */}
      {/*  Add a Playlist component */}
    </div>
  </div>


    </div>

  );
}


}

export default App;
