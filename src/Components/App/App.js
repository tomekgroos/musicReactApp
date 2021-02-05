import React from 'react';
import './App.css';
import Logo from '../img/logo white.png';

import PlayList from "../PlayList/PlayList";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";

class App extends React.Component {

  

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "New Playlist",
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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

    if (this.state.playlistTracks.length === 0){
      console.log("empty playlist")
      return;
    } else {
        Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() =>{
        this.setState({
        playlistName: "New Playlist",
        playlistTracks: []
      })
      })  
      console.log("playlist saved");
    }

      
      
      
  }

  search(term){
    Spotify.search(term).then(searchResults =>{
      this.setState({
        searchResults: searchResults
      })
    })
  }

render() {
  return (
    
    <div>
  <img className="logo" src={Logo} alt="logo"/>
     <h1 className="highlight">(Not) Spotify Player</h1>

  <div className="App">
    <SearchBar 
    onSearch={this.search}/>
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults}  onAdd={this.addTrack} />
      <PlayList playlistName={this.state.playlistName} 
      playlistTracks={this.state.playlistTracks} 
      onNameChange={this.updatePlaylistName}
      onRemove={this.removeTrack}
      onSave={this.savePlaylist}/>
    </div>
  </div>


    </div>

  );
}


}

export default App;
