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
      searchResults: [
        {id: 1, name: "Wake me up", artist: "Avicii", album: "True"},
      {id: 2, name: "Use Somebody", artist: "Kings Of Leon", album: "Only By The Night"},
      {id: 3, name: "All My Life", artist: "O.S.T.R", album: "W drodze po szczescie"}
      ],
      playlistName: "Fav Songs",
      playlistTracks: [
         {id: 4, name: "Wake me up", artist: "Avicii", album: "True"},
      {id: 5, name: "Use Somebody", artist: "Kings Of Leon", album: "Only By The Night"},
      {id: 6, name: "All My Life", artist: "O.S.T.R", album: "W drodze po szczescie"}
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

addTrack (track) {
    let tracks = this.state.playlistTracks;

    if (tracks.find(savedTrack =>
    savedTrack.id === track.id)){
      return;
    } else {
      tracks.push(track);
      this.setState({
        playlistTracks: tracks
      })
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(selectedTrack => selectedTrack.id !== track.id);
    this.setState({
      playlistTracks: tracks
    })
  }

  updatePlaylistName(name){

    this.setState({
      playlistName: name
    });
  }

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

render() {
  return (
    
    <div>
  <img className="logo" src={Logo} alt="logo"/>
     <h1 className="highlight">(Not) Spotify Player</h1>

  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults}  onAdd={this.addTrack} />
      <PlayList playlistName={this.state.playlistName} 
      playlistTracks={this.state.playlistTracks} 
      onRemove={this.removeTrack}
      onNameChange={this.updatePlaylistName}/>
    </div>
  </div>


    </div>

  );
}


}

export default App;
