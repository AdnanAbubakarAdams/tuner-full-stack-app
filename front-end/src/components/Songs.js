import React, { useEffect, useState } from "react";
import axios from "axios";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => setSongs(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="Song">
      <section>
        <table>
          <thead>
            <tr>
              {/* <th></th> */}
              <th>Favorite</th>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Songs;
