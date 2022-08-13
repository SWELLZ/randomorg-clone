import React from 'react';

function SpotifyComponent() {
    const CLIENT_ID = '96fae667ff014ebf988d8e2f98419daf';
    const REDIRECT_URI = 'http://localhost:3000/spotify';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const RESPONSE_TYPE = 'code';

    return (
        <>
            <a rel='noreferrer' target="_blank" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
            <h1>Spotify API Feature *WIP*</h1>
        </>
    )
}

export default SpotifyComponent