import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const LogsII = props => {
  const { classes } = props;

  console.log(props.playerInput);

  return (
    <>
      <div>
        <h3>{props.eachRoomInfo.name}</h3>
        <p>{props.eachRoomInfo.description}</p>
      </div>
    </>
  );
};

export default LogsII;
