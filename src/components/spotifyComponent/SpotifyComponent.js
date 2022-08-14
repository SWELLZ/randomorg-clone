import React, { useEffect, useState } from 'react';

function SpotifyComponent() {
    //Spotify api requirements
    const CLIENT_ID = '96fae667ff014ebf988d8e2f98419daf';
    const REDIRECT_URI = 'http://localhost:3000/spotify';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const RESPONSE_TYPE = 'token';

    const [token, setToken] = useState(''); //token of user
    var userPlaylists;
    const [playlists, setPlaylists] = useState({});

    const fetchUserPlaylists = async () => {
        //recieve user playlists from spotify
        return await fetch('https://api.spotify.com/v1/me/playlists', {
            headers: {'Authorization': 'Bearer ' + token}
        })
            .then((response) => response.json())
    }
    const buttonClick = async () => {
        userPlaylists = await fetchUserPlaylists();
        setPlaylists(await fetchUserPlaylists());
        console.log(userPlaylists);
    }

    const renderPlaylists = () => {
        if (playlists.items) {
            return (
                <div>
                    <h1>Playlists</h1>
                    {playlists.items.map(element => {
                        return <p key={element.name}>{element.name}</p>
                    })}
                </div>
            )
        } else {
            return (
                <p>You are not Signed in.</p>
            )
        }
    }

    useEffect(() => {
        var access_token;
        //Extract token from url
        const hash = window.location.hash;
        if (hash.includes('access_token')){
            access_token = hash.split('&').find(elem => elem.startsWith('#access_token')).split('=')[1];
        }
        
        setToken(access_token);
    }, [])

    return (
        <>
            <a rel='noreferrer' target="_blank" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
            <button onClick={buttonClick}>Click when signed in</button>
            <h1>Spotify API Feature *WIP*</h1>
            {renderPlaylists()}
        </>
    )
}

export default SpotifyComponent