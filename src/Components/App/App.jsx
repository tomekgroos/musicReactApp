import React from 'react';
import './App.css';
import Logo from '../img/logo white.png';

class App extends React.Component {

render() {
  return (
    
    <div>
  <img className="logo" src={Logo} alt="logo"/>
     <h1>(Not) Spotify Player</h1>

  
  <h1>Ja<span class="highlight">mmm</span>ing</h1>
  <div class="App">
    {/* Add a SearchBar component */}
    <div class="App-playlist">
      {/*  Add a SearchResults component */}
      {/*  Add a Playlist component */}
    </div>
  </div>


    </div>

  );
}


}

export default App;
