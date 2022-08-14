import React from 'react';
import { Link } from "react-router-dom"

const Song = ({ song }) => {
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>{song.name}</Link>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>{song.artist}</Link>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>{song.album}</Link>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>{song.time}</Link>
      </td>
    </tr>
  )
}

export default Song;