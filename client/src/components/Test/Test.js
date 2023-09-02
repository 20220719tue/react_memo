import React, { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("/api/users/list")
      .then((response) => {
        setList(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (list.length > 0) {
    return list.map((data) => <div key={data._id}>{data.title}</div>);
  }
}

export default Test;
