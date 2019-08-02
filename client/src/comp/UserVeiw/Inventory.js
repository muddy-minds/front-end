import React, { useState, useEffect } from "react";
import axios from 'axios'

function Inventory() {

    const [player, setPlayer] = useState([]);

    useEffect(() => {
        axios
          .get("https://muddyminds.herokuapp.com/api/players/")
          .then(response => setPlayer(response.data))
          .catch(err => console.log("an error occurs", err));
      }, []);


    return (
        <>
        <div className="playerCard">
            {player.map(data => 
        <dir>
        <h3>{data.name}</h3>
        <p>reincarnations left: {data.lives}</p>
        <p>Ego: {data.health_points}</p>
        <p>inventory: <br />{data.items}</p>
        <p>Room: {data.room_id}</p>
        </dir> )}
        </div>
        </>
    )
}

export default Inventory
