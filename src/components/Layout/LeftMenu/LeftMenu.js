import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { NewArtistForm } from "../../Artist";
import { BasicModal } from "../../Shared";
import "./LeftMenu.scss";

export const LeftMenu = () => {
  const { pathname } = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);

  const closeModal = () => {
    setShowModal(false);
    setTitleModal("");
    setContentModal(null);
  };

  const openModal = (type) => {
    if (type === "artist") {
      setTitleModal("Nuevo artista");
      setContentModal(<NewArtistForm onClose={closeModal} />);
    }
    if (type === "album") {
      setTitleModal("Nuevo álbum");
      setContentModal(<p>Formulario nuevo álbum</p>);
    }
    if (type === "song") {
      setTitleModal("Nueva canción");
      setContentModal(<p>Formulario nueva canción</p>);
    }

    setShowModal(true);
  };

  const isCurrentPage = (route) => route === pathname;

  return (
    <>
      <div className="left-menu">
        <Menu secondary vertical fluid>
          <Menu.Item
            as={Link}
            to="/"
            name="Inicio"
            icon="home"
            active={isCurrentPage("/")}
          />

          <Menu.Item
            as={Link}
            to="/artists"
            name="Artistas"
            icon="users"
            active={isCurrentPage("/artists")}
          />

          <Menu.Item
            as={Link}
            to="/albums"
            name="Albumes"
            icon="window maximize outline"
            active={isCurrentPage("/albums")}
          />
        </Menu>

        <Menu secondary vertical fluid>
          <Menu.Item
            name="Nueva canción"
            icon="plus"
            link
            onClick={() => openModal("song")}
          />

          <Menu.Item
            name="Nuevo álbum"
            icon="plus"
            link
            onClick={() => openModal("album")}
          />

          <Menu.Item
            name="Nuevo artista"
            icon="plus"
            link
            onClick={() => openModal("artist")}
          />
        </Menu>
      </div>

      <BasicModal
        show={showModal}
        onClose={closeModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
};
