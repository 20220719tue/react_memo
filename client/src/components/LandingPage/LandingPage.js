import { React, useState, useEffect } from "react";
import "./LandingPage.css";
import Modal from "../Modal/Modal";
import axios from "axios";

function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [List, setList] = useState([]);
  const [Data, setData] = useState([]);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

  return (
    <main id="main">
      <header id="header">
        <h1>메모장</h1>
        <div className="memo_button">
          <button
            className="new_memo"
            onClick={() => {
              openModal();
              setData({
                title: "",
                contents: "",
                bold: false,
                italic: false,
                underline: false,
                strikethrough: false,
                alignleft: true,
                aligncenter: false,
                alignright: false,
                color: "black",
              });
            }}
          >
            새 메모
          </button>
        </div>
        <div className="memo_modal"></div>
      </header>
      {/* //헤더 */}
      <section id="section">
        <div className="content1">
          <Modal
            className="Modal"
            isOpen={isModalOpen}
            closeModal={closeModal}
            Text={Text}
            Data={Data}
          ></Modal>
          <div className="content_list">
            {List.map((data, key) => (
              <div
                className="content"
                onClick={() => {
                  openModal();
                  setData({
                    _id: data._id,
                    title: data.title,
                    contents: data.contents,
                    date: data.date,
                    bold: data.Bold,
                    italic: data.Italic,
                    underline: data.Underline,
                    strikethrough: data.Strikethrough,
                    alignleft: data.AlignLeft,
                    aligncenter: data.AlignCenter,
                    alignright: data.AlignRight,
                    color: data.color,
                  });
                }}
                key={key}
              >
                <div className="con_tit" key={key}>
                  <span>{`${data.title}`}</span>
                </div>
                <div className="con_txt" key={data._id}>
                  <div
                    style={{
                      fontWeight: data.Bold === true ? "700" : "200",
                      fontStyle: data.Italic === true ? "italic" : "normal",
                      textDecoration:
                        data.Underline === true && data.Strikethrough === true
                          ? "underline line-through"
                          : data.Underline === true &&
                            data.Strikethrough === false
                          ? "underline"
                          : data.Underline === false &&
                            data.Strikethrough === true
                          ? "line-through"
                          : "none",
                      textAlign:
                        data.AlignLeft === true
                          ? "left"
                          : data.AlignCenter === true
                          ? "center"
                          : "right",
                      color: data.color,
                    }}
                  >{`${data.contents}`}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* //섹션 */}
      <footer id="footer">
        <p>Copyright 2023. 20220719tue. All rights reserved.</p>
      </footer>
      {/* //푸터 */}
    </main>
  );
}

export default LandingPage;
