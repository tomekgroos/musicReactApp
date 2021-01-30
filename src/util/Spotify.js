let accessToken;

const clientID = "45fb4769cf2145f694dc307366a8545f";
const redirectURI = "http://localhost:3000/";




const Spotify  = {

    getAccessToken(){
        if (accessToken){
            return accessToken;
        }

        // check whether access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch){
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            // clear the parameters
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }else {
            const accessURL = `https://accounts.spotify.com/authorize?
            client_id=${clientID}&response_type=token&scope=playlist
            -modify-public&redirect_uri=${redirectURI}`
            window.location = accessURL;
        }
    },

      search(term){
        const accessToken = Spotify.getAccessToken;

        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, 
        {headers: {
            Authorization: `Holder ${accessToken}`
        }}).then(response => {
            return response.json();
        }).then(jsonResponse =>{
            if(!jsonResponse.tracks){
                return [];
            } else{
                return jsonResponse.tracks.items.map(track =>({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }));
            }
        })
       
     
    },

    savePlaylist(playlistName, trackURIs) {
    if (!playlistName || !trackURIs.length){
        return;
    } 
}

    
}
export default Spotify;