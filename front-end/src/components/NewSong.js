import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const NewSong = () => {
    let navigate = useNavigate();

    const addSong = (newSong) => {
        axios
            .post(`${API}/songs`, newSong)
            .then(() => {
                navigate(`/songs`)
            },
            (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c))
    }

    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    })

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
      };
    
      const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        addSong(song);
      };


      return (
        <div className="New">
          <h2>New</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Song Name:</label>
            <input
              id="name"
              value={song.name}
              type="text"
              onChange={handleTextChange}
              placeholder="Song Title"
              required
            />
            <label htmlFor="artist">Artist</label>
            <input
              id="artist"
              type="text"
              required
              value={song.artist}
              placeholder="Artist Name"
              onChange={handleTextChange}
            />
            <label htmlFor="album">Album</label>
            <input
              id="album"
              type="text"
            //   name="category"
              value={song.album}
              placeholder="Album"
              onChange={handleTextChange}
            />
            <label htmlFor="time">Time</label>
            <input
              id="time"
              type="text"
              value={song.time}
              placeholder="Time"
              onChange={handleTextChange}
            />
            <label htmlFor="is_favorite">Favorite</label>
            <input
              id="is_favorite"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={song.is_favorite}
            />
    
            <br />
            <input type="submit" />
          </form>
        </div>
      );
}

export default NewSong