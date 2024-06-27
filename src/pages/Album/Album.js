import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { Album as AlbumController } from "../../api";
import { AlbumInfo } from "../../components/Album";
import "./Album.scss";

const albumController = new AlbumController();

export const Album = () => {
  const { id } = useParams();

  const [album, setAlbum] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await albumController.getAlbum(id);

        setAlbum(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  if (!album)
    return (
      <Loader active inline="centered" size="large">
        Cargando
      </Loader>
    );

  return (
    <div className="album-page">
      <AlbumInfo album={album} />
    </div>
  );
};
