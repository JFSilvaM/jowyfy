import { Link, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./LeftMenu.scss";

export const LeftMenu = () => {
  const { pathname } = useLocation();

  const isCurrentPage = (route) => route === pathname;

  return (
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
          onClick={() => console.log("Nueva canción")}
        />

        <Menu.Item
          name="Nuevo álbum"
          icon="plus"
          link
          onClick={() => console.log("Nuevo álbum")}
        />

        <Menu.Item
          name="Nuevo artista"
          icon="plus"
          link
          onClick={() => console.log("Nuevo artista")}
        />
      </Menu>
    </div>
  );
};
