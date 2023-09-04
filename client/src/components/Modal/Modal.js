import { React, useEffect, useState } from "react";
import "./Modal.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faPalette,
  faPaintbrush,
} from "@fortawesome/free-solid-svg-icons";

function Modal({ isOpen, closeModal, Data }) {
  const [Title, setTitle] = useState("");
  const [Contents, setContents] = useState("");
  const [Bold, setBold] = useState(false);
  const [Italic, setItalic] = useState(false);
  const [Underline, setUnderline] = useState(false);
  const [Strikethrough, setStrikethrough] = useState(false);
  const [Align, setAlign] = useState(false);
  const [AlignLeft, setAlignLeft] = useState(true);
  const [AlignCenter, setAlignCenter] = useState(false);
  const [AlignRight, setAlignRight] = useState(false);
  const [colorBrush, setcolorBrush] = useState(false);
  const [color, setColor] = useState("black");
  const [NewBtn, setNewBtn] = useState(true);

  const onTitleHandler = (event) => {
    setTitle(event.currentTarget.value);
  };
  const onContentsHandler = (event) => {
    setContents(event.currentTarget.value);
  };

  const onSaveHandler = (event) => {
    event.preventDefault();

    let body = {
      title: Title,
      contents: Contents,
      Bold: Bold,
      Italic: Italic,
      Underline: Underline,
      Strikethrough: Strikethrough,
      AlignLeft: AlignLeft,
      AlignCenter: AlignCenter,
      AlignRight: AlignRight,
      color: color,
    };

    if (body.title === "") {
      alert("제목이 없습니다");
    } else if (body.contents === "") {
      alert("내용이 없습니다");
    } else {
      axios
        .post("/api/users/save", body)
        .then(() => {
          console.log("성공");
          window.location.replace("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onDeleteHandler = (event) => {
    event.preventDefault();

    let body = {
      _id: Data._id,
      title: Title,
      contents: Contents,
      Bold: Bold,
      Italic: Italic,
      Underline: Underline,
      Strikethrough: Strikethrough,
      AlignLeft: AlignLeft,
      AlignCenter: AlignCenter,
      AlignRight: AlignRight,
      color: color,
    };

    if (window.confirm("메모를 삭제하시겠습니까?")) {
      axios
        .delete("/api/users/delete", body)
        .then(() => {
          console.log("성공");
          window.location.replace("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onModifyHandler = (event) => {
    event.preventDefault();

    let body = {
      _id: Data._id,
      title: Title,
      contents: Contents,
      Bold: Bold,
      Italic: Italic,
      Underline: Underline,
      Strikethrough: Strikethrough,
      AlignLeft: AlignLeft,
      AlignCenter: AlignCenter,
      AlignRight: AlignRight,
      color: color,
    };

    if (body.title === "") {
      alert("제목이 없습니다");
    } else if (body.contents === "") {
      alert("내용이 없습니다.");
    } else {
      axios
        .put("/api/users/modify", body)
        .then(() => {
          console.log("성공");
          window.location.replace("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //모달창의 isOpen===true일때만 useEffect() 실행
  useEffect(() => {
    console.log("마운트");
    if (Data.title === undefined) {
      setTitle("");
    } else {
      setTitle(Data.title);
    }
    setContents(Data.contents);
    setBold(Data.bold);
    setItalic(Data.italic);
    setUnderline(Data.underline);
    setStrikethrough(Data.strikethrough);
    setAlignLeft(Data.alignleft);
    setAlignCenter(Data.aligncenter);
    setAlignRight(Data.alignright);
    setColor(Data.color);

    if (Data.title === "") setNewBtn(true);
    else setNewBtn(false);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div id="Modal" style={{ display: isOpen ? "block" : "none" }}>
      <div id="container">
        <header id="Modal_header">
          <input
            type="text"
            className="modal_tit"
            placeholder="제목을 입력하세요"
            onChange={onTitleHandler}
            value={Title}
          ></input>
          <button
            className="modal_btn"
            onClick={() => {
              closeModal();
            }}
          >
            <FontAwesomeIcon icon={faX} size="3x" />
          </button>
        </header>
        {/* //header */}

        <section id="Modal_con">
          <textarea
            className="modal_txt"
            onChange={onContentsHandler}
            value={Contents}
            onClick={() => {
              setAlign(false);
              setcolorBrush(false);
            }}
            style={{
              resize: "none",
              fontWeight: Bold === true ? "700" : "200",
              fontStyle: Italic === true ? "italic" : "normal",
              textDecoration:
                Underline === true && Strikethrough === true
                  ? "underline line-through"
                  : Underline === true && Strikethrough === false
                  ? "underline"
                  : Underline === false && Strikethrough === true
                  ? "line-through"
                  : "none",
              textAlign:
                AlignLeft === true
                  ? "left"
                  : AlignCenter === true
                  ? "center"
                  : "right",
              color: color,
            }}
          ></textarea>
        </section>
        {/* //section */}

        <nav id="Modal_nav">
          <div
            className="faBold"
            onClick={() => {
              if (Bold === true) setBold(false);
              else setBold(true);
              setAlign(false);
              setcolorBrush(false);
            }}
            style={{
              backgroundColor: Bold === true ? "gray" : "white",
              color: Bold === true ? "white" : "black",
            }}
          >
            <FontAwesomeIcon icon={faBold} />
          </div>
          <div
            className="faItalic"
            onClick={() => {
              if (Italic === true) setItalic(false);
              else setItalic(true);
              setAlign(false);
              setcolorBrush(false);
            }}
            style={{
              backgroundColor: Italic === true ? "gray" : "white",
              color: Italic === true ? "white" : "black",
            }}
          >
            <FontAwesomeIcon icon={faItalic} />
          </div>
          <div
            className="faUnderline"
            onClick={() => {
              if (Underline === true) setUnderline(false);
              else setUnderline(true);
              setAlign(false);
              setcolorBrush(false);
            }}
            style={{
              backgroundColor: Underline === true ? "gray" : "white",
              color: Underline === true ? "white" : "black",
            }}
          >
            <FontAwesomeIcon icon={faUnderline} />
          </div>
          <div
            className="faStrikethrough"
            onClick={() => {
              if (Strikethrough === true) setStrikethrough(false);
              else setStrikethrough(true);
              setAlign(false);
              setcolorBrush(false);
            }}
            style={{
              backgroundColor: Strikethrough === true ? "gray" : "white",
              color: Strikethrough === true ? "white" : "black",
            }}
          >
            <FontAwesomeIcon icon={faStrikethrough} />
          </div>
          <div
            className="faAlignLeft"
            onClick={() => {
              if (Align === true) setAlign(false);
              else setAlign(true);
              setcolorBrush(false);
            }}
            style={{ display: AlignLeft === true ? "block" : "none" }}
          >
            <FontAwesomeIcon icon={faAlignLeft} />
          </div>
          <div
            className="faAlignCenter"
            onClick={() => {
              if (Align === true) setAlign(false);
              else setAlign(true);
            }}
            style={{ display: AlignCenter === true ? "block" : "none" }}
          >
            <FontAwesomeIcon icon={faAlignCenter} />
          </div>
          <div
            className="faAlignRight"
            onClick={() => {
              if (Align === true) setAlign(false);
              else setAlign(true);
            }}
            style={{ display: AlignRight === true ? "block" : "none" }}
          >
            <FontAwesomeIcon icon={faAlignRight} />
          </div>
          <div
            className="Align_Box"
            style={{ display: Align === true ? "block" : "none" }}
          >
            <div
              className="Box_faAlignLeft"
              onClick={() => {
                setAlignLeft(true);
                setAlignCenter(false);
                setAlignRight(false);
              }}
              style={{
                backgroundColor: AlignLeft === true ? "gray" : "white",
                color: AlignLeft === true ? "white" : "black",
              }}
            >
              <FontAwesomeIcon icon={faAlignLeft} />
            </div>
            <div
              className="Box_faAlignCenter"
              onClick={() => {
                setAlignLeft(false);
                setAlignCenter(true);
                setAlignRight(false);
              }}
              style={{
                backgroundColor: AlignCenter === true ? "gray" : "white",
                color: AlignCenter === true ? "white" : "black",
              }}
            >
              <FontAwesomeIcon icon={faAlignCenter} />
            </div>
            <div
              className="Box_faAlignRight"
              onClick={() => {
                setAlignLeft(false);
                setAlignCenter(false);
                setAlignRight(true);
              }}
              style={{
                backgroundColor: AlignRight === true ? "gray" : "white",
                color: AlignRight === true ? "white" : "black",
              }}
            >
              <FontAwesomeIcon icon={faAlignRight} />
            </div>
          </div>
          <div
            className="faPaintbrush"
            onClick={() => {
              if (colorBrush === true) setcolorBrush(false);
              else setcolorBrush(true);
              setAlign(false);
            }}
            style={{ color: color }}
          >
            <FontAwesomeIcon icon={faPaintbrush} />
          </div>
          <div
            className="colorBrush"
            style={{
              display: colorBrush === true ? "block" : "none",
            }}
          >
            <div
              style={{ backgroundColor: "red" }}
              onClick={() => {
                setColor("red");
              }}
            ></div>
            <div
              style={{ backgroundColor: "orange" }}
              onClick={() => {
                setColor("orange");
              }}
            ></div>
            <div
              style={{ backgroundColor: "yellow" }}
              onClick={() => {
                setColor("yellow");
              }}
            ></div>
            <div
              style={{ backgroundColor: "skyblue" }}
              onClick={() => {
                setColor("skyblue");
              }}
            ></div>
            <div
              style={{ backgroundColor: "blue" }}
              onClick={() => {
                setColor("blue");
              }}
            ></div>
            <div
              style={{ backgroundColor: "green" }}
              onClick={() => {
                setColor("green");
              }}
            ></div>
            <div
              style={{ backgroundColor: "purple" }}
              onClick={() => {
                setColor("purple");
              }}
            ></div>
            <div
              style={{ backgroundColor: "black" }}
              onClick={() => {
                setColor("black");
              }}
            ></div>
          </div>

          <div className="faPalette">
            <FontAwesomeIcon icon={faPalette} />
          </div>
          <div className="colorPalette">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <button
            className="memo_save"
            onClick={onSaveHandler}
            style={{ display: NewBtn === true ? "block" : "none" }}
          >
            저장
          </button>
          <button
            className="memo_delete"
            onClick={onDeleteHandler}
            style={{ display: NewBtn === false ? "block" : "none" }}
          >
            삭제
          </button>
          <button
            className="memo_edit"
            onClick={onModifyHandler}
            style={{ display: NewBtn === false ? "block" : "none" }}
          >
            수정
          </button>
        </nav>
        {/* //nav */}
      </div>
    </div>
  );
}

export default Modal;
