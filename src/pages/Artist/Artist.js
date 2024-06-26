import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Artist as ArtistController } from "../../api";
import { ArtistBanner } from "../../components/Artist";
import "./Artist.scss";

const artistController = new ArtistController();

export const Artist = () => {
  const { id } = useParams();

  const [artist, setArtist] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await artistController.getArtist(id);

        setArtist(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  if (!artist) return null;

  return (
    <div className="artist-page">
      <ArtistBanner image={artist.image} name={artist.name} />

      <div className="artist-page__slider">
        <h2>Álbumes</h2>
      </div>

      <div className="artist-page__slider">
        <h2>Canciones</h2>
      </div>
    </div>
  );
};
