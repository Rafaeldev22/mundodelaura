import { useState } from "react";
import "./App.css";
import "../src/cssGeral/cssGeral.css";

import jogosNintendo from "../src/api/jogosNintendo";

import Modal from "../componentes/modal/Modal";
import Container from "../componentes/container/Container";

import { motion } from "framer-motion";

export default function Nintendo() {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const handleOpenModal = (url) => {
    if (!url) {
      alert("Aguarde, estamos atualizando a pagina!");
      return;
    }

    setCurrentVideo(url);
    setShowModal(true);
  };

  const handleCloseModal = (url) => {
    setShowModal(false);
    setCurrentVideo(url);
  };

  return (
    <div className="container">
      <div className="caixa">
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          exit={{ x: -window.innerWidth }}
          className="caixa-conteudo"
        >
          {jogosNintendo.map((item, index) => (
            <Container
              key={index}
              image={item.image}
              url={() => handleOpenModal(item.url)}
              nome={item.nome}
            />
          ))}
        </motion.div>
        <Modal
          show={showModal}
          onClose={handleCloseModal}
          videoSrc={currentVideo} // Insira a URL do vídeo aqui
        />
      </div>
    </div>
  );
}
