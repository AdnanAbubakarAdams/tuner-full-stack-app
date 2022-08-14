import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const SongInfo = () => {
  const [song, setSong] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then((response) => {
      setSong(response.data);
    });
  }, [id, navigate, API]);

  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleDelete = () => {
    deleteSong();
  };

  return (
    <>
    {/* <h2>Tuner</h2> */}
      <article className="Song-Details">
      <h1>Tuner</h1>
        <h3>
          {song.is_favorite ? <span>⭐️</span> : null} {song.name}
        </h3>

        <h3>{song.artist}</h3>
        <h3>{song.album}</h3>
        <h3>{song.time}</h3>
        <div >
          <div>
            <Link to={`/songs`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/songs/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    </>
  );
};

export default SongInfo;
