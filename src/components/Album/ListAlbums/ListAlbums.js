import { map, size } from "lodash";
import { Link } from "react-router-dom";
import { Grid, Image, Loader } from "semantic-ui-react";
import "./ListAlbums.scss";

export const ListAlbums = (props) => {
  const { albums } = props;

  if (size(albums) === 0)
    return (
      <Loader active inline="centered" size="large">
        Cargando
      </Loader>
    );

  return (
    <Grid className="list-albums">
      <Grid.Row columns={5}>
        {map(albums, (album) => (
          <Grid.Column
            key={album.id}
            as={Link}
            to={`/albums/${album.id}`}
            className="list-albums__album"
          >
            <Image src={album.image} alt={album.name} />

            <p>{album.name}</p>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};
