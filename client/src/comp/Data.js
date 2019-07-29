import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ url }) => {
  const [data, setData] = useState(null);
  useEffect(
    () => {
      let mounted = true;

      const loadData = async () => {
        const { data } = await axios.get('heroku');
        console.log("data = ", data, "\n");
        if (mounted) {
          setData(data);
        }
      };

      loadData();

      return () => {
        mounted = false;
      };
    },
    [url]
  );

  if (!data) {
    return <span data-testid="loading"> Loading data...</span>;
  }

  console.log("data = ", data, "\n");

  return <h1>{data}</h1>;
};
