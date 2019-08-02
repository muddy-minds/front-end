// import React from 'react'
// import axios from 'axios'
import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import "./logs.sass";
import axios from "axios";

import LogsII from "./LogsII";

const Logs = props => {
  const [playerInput, setPlayerInput] = useState();
  const [roomInfo, setRoomInfo] = useState([]);

//   const submitPlayerInput = e => {
//     // e.preventDefault();
//     setPlayerInput(e.target.value);
//   };

  useEffect(() => {
    axios
      .get(`https://muddyminds.herokuapp.com/api/rooms/`)
      .then(res => {
        console.log(playerInput, "player input");
        console.log(res, "room obj");
        setRoomInfo(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  const filteredRoom = roomInfo.filter(room => room.id == playerInput);

  return (
    <>
      <div className="title">
        Waiting... <br />
        Welcome, friend
      </div>
      <form>
        <input
          type="text"
          name="playerInput"
          value={playerInput}
          onChange={e => setPlayerInput(e.target.value)}
          placeholder="Enter room number to go to that room"
        />

      </form>

      {filteredRoom.map(eachRoomInfo => {
        return (
          <LogsII
            eachRoomInfo={eachRoomInfo}
            key={eachRoomInfo.id}
            playerInput={playerInput}
          />
        );
      })}
    </>
  );
};

export default Logs;
