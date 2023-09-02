import React, { useState, useEffect } from "react";
import axios from "axios";

function List() {
  const [List, setList] = useState([]);
  const [Title, setTitle] = useState("");
  const [Contents, setContents] = useState("");

  const OnSubmintHander = (event) => {
    setTitle("집가고 싶다");
    setContents("저는 사실 집이 너무나도 가고 싶었거든요.");

    event.preventDefault();

    const formData = new FormData();
    formData.append("title", Title);
    formData.append("contents", Contents);

    axios
      .post("/api/users/save", { title: Title, Bold: true })
      .then(() => {
        console.log("성공");
      })
      .catch((err) => {
        console.log(err);
      });

    // axios({ method: "post", url: "/api/users/save",  })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  useEffect(() => {
    axios
      .get("/api/users/list")
      .then((response) => {
        setList(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // return (
  //   <form>
  //     <button onClick={OnSubmintHander}>저장</button>
  //   </form>
  // );
  return (
    <div>
      {List.map((data) => (
        <div key={data._id}>{`제목은 ${data._id}`}</div>
      ))}
    </div>
  );
}

export default List;
