import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
    const [datatype, setDatatype] = useState([]);
    useEffect(() => {
      axios
        .get("https://muddyminds.herokuapp.com/api/rooms/")
        .then(response => setDatatype(response.data))
        .catch(err => console.log("an error occurs", err));
    }, []);
  
    console.log(datatype)
    return (
      <div>
      {datatype.map(data => 
        <h2>{data.name}<br/>{data.description}</h2> )}
      </div>
    );
};
