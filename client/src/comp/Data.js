import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ url }) => {
    const [datatype, setDatatype] = useState("");
    useEffect(() => {
      axios
        .get("https://muddyminds.herokuapp.com/")
        .then(res => setDatatype(res.data.message), 
        console.log('made it!'))
        .catch(err => console.log(err));
    }, []);
  
    return (
      <div className="App">
        <h1>{datatype}</h1>
      </div>
    );
};
