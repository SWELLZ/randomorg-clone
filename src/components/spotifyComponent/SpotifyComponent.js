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
    //Used to store the specific playlist the user wants to shuffle
    const [playlistToShuffle, setPlaylistToShuffle] = useState('');

    //gets user playlists from spotify
    const fetchUserPlaylists = async () => {
        return await fetch('https://api.spotify.com/v1/me/playlists', {
            headers: {'Authorization': 'Bearer ' + token}
        })
            .then((response) => response.json())
    }
    const fetchPlaylistItems = async () => {
        return await fetch(`https://api.spotify.com/v1/playlists/${playlistToShuffle}/tracks`, {
            headers: {'Authorization': 'Bearer ' + token}
        })
            .then((response) => response.json())
    }

    //sets the playlists var to the result of fetch
    const displayPlaylists = async () => {
        setPlaylists(await fetchUserPlaylists());
        console.log(playlists.next);
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
        //console.log(playlists.items[0])
        setPlaylistToShuffle(playlist);
    }

    const renderPlaylistItems = async () => {
        console.log(await fetchPlaylistItems());
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

    const displayPlaylistItems = () => {
        if (playlistToShuffle.items){
            return (
                <div>
                    <h1>Item</h1>
                    {playlistToShuffle.items.map((element, index) => {
                        return <p>{element[0].track.name}</p>
                    })}
                </div>
            )
        } else {
            return <p>No songs</p>
        }
    }

    return (
        <>
            {/*Login oAuth*/}
            <a rel='noreferrer' target="_blank" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a> 

            <button onClick={displayPlaylists}>Click when signed in</button>

            <h1>Spotify API Feature *WIP*</h1>
            <button onClick={renderPlaylistItems}>LAKFLK</button>

            {renderPlaylists()}
            {displayPlaylistItems()}
        </>
    )
}

export default SpotifyComponent