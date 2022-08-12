import React,{useEffect, useState } from 'react';
import axios from "axios";
import Song from './Song';

const API = process.env.REACT_APP_API_URL;

const Songs = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios.get(`${API}/songs`)
        .then((response) => setSongs(response.data))
        .catch((c) => console.warn("catch", c))
    }, [])
  return (
    <div>
        
    </div>
  )
}

export default Songs;