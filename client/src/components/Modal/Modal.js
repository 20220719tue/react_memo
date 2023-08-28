import { React, useState } from "react";
import "./Modal.css";
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
  faPaintBrush,
  faPalette,
  faPaintbrush,
} from "@fortawesome/free-solid-svg-icons";

function Modal({ isOpen, closeModal }) {
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

  return (
    <div id="Modal" style={{ display: isOpen ? "block" : "none" }}>
      <header id="Modal_header">
        <input
          type="text"
          className="modal_tit"
          placeholder="제목을 입력하세요"
        ></input>
        <button className="modal_btn" onClick={closeModal}>
          <FontAwesomeIcon icon={faX} size="3x" />
        </button>
      </header>
      {/* //header */}

      <section id="Modal_con">
        <textarea
          className="modal_txt"
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
            if (colorBrush === false) setcolorBrush(true);
            else setcolorBrush(false);
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
          <div></div>
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
        <button>저장</button>
      </nav>
      {/* //nav */}
    </div>
  );
}
export default Modal;
