import React, { useEffect, useState } from 'react';

function SpotifyComponent() {
    //Spotify api requirements
    const CLIENT_ID = '96fae667ff014ebf988d8e2f98419daf';
    const REDIRECT_URI = 'http://localhost:3000/spotify';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const RESPONSE_TYPE = 'token';

    //variable to store access token
    const [token, setToken] = useState(''); //token of user
    //variable storing entire API object (playlists)
    const [playlists, setPlaylists] = useState({});
    //Used to store the selected playlist ID
    const [playlistID, setPlaylistID] = useState('');
    const [playlistToShuffle, setPlaylistToShuffle] = useState({});
    let playlistTracks = [];

    //gets user playlists from spotify
    const fetchUserPlaylists = async () => {
        return await fetch('https://api.spotify.com/v1/me/playlists', {
            headers: {'Authorization': 'Bearer ' + token}
        })
            .then((response) => response.json())
    }
    const fetchPlaylistItems = async () => {
        return await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
            headers: {'Authorization': 'Bearer ' + token}
        })
            .then((response) => response.json())
    }

    //sets the playlists var to the result of fetch
    const fetchPlaylists = async () => {
        setPlaylists(await fetchUserPlaylists());
    }

    //renders each playlist as a <p> element
    const renderPlaylists = () => {
        if (playlists.items) { //if data is recieved
            return (
                <div>
                    <h1>Playlists</h1>
                    {playlists.items.map(element => {
                        return <button key={element.name} onClick={selectPlaylist}>{element.name}</button>
                    })}
                </div>
            )
        } else {
            return ( //if user not signed in:
                <p>You are not Signed in.</p>
            )
        }
    }

    //stores variable of button text to variable
    const selectPlaylist = (e) => {
        var playlist;
        let playlistsLen = playlists.items.length
        //loops through playlists to find id
        for (let i = 0; i < playlistsLen; i++){
            if (e.target.innerHTML === playlists.items[i].name){
                playlist = playlists.items[i].id;
                break;
            }
        }
        
        setPlaylistID(playlist);
    }

    const renderPlaylistItems = async () => {
        setPlaylistToShuffle(await fetchPlaylistItems());
    }
         

    useEffect(() => {
        //variables for access token
        var access_token;
        const hash = window.location.hash;

        //Extract token from url
        if (hash.includes('access_token')){
            access_token = hash.split('&').find(elem => elem.startsWith('#access_token')).split('=')[1];
        }
        
        setToken(access_token);
    }, [])

    const displayPlaylistItems = async () => {
        await renderPlaylistItems();
        if (playlistToShuffle){
            playlistToShuffle.items.forEach((elem) => 
                playlistTracks.push(elem)
            );

            
            playlistTracks.map(elem => {
                const para = document.createElement('p')
                para.innerHTML = elem.track.name;
                document.getElementById('songs').appendChild(para)
            })

            return (
                <h1>Item</h1>
            )
        } else {
            return <p>No songs</p>
        }
    }
    
    return (
        <>
            {/*Login oAuth*/}
            <a rel='noreferrer' target="_blank" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a> 

            <button onClick={fetchPlaylists}>Click when signed in</button>

            <h1>Spotify API Feature *WIP*</h1>
            <button onClick={displayPlaylistItems}>Display Songs</button>

            {renderPlaylists()}
            <div id='songs'></div>
        </>
    )
}

export default SpotifyComponent