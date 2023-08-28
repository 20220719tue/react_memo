import { React, useState } from "react";
import "./LandingPage.css";
import Modal from "../Modal/Modal";

function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main id="main">
      <header id="header">
        <h1>메모장</h1>
        <div className="memo_button">
          <button className="new_memo" onClick={openModal}>
            새 메모
          </button>

          <button className="new_folder">새 폴더</button>
        </div>
        <div className="memo_modal"></div>
      </header>
      <section id="section">
        <div className="content1">
          <Modal
            className="Modal"
            isOpen={isModalOpen}
            closeModal={closeModal}
          ></Modal>
        </div>
      </section>
      <footer id="footer"></footer>
    </main>
  );
}

export default LandingPage;
