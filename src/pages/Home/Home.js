import { Button } from "semantic-ui-react";
import { Auth } from "../../api";

const auth = new Auth();

export const Home = () => {
  return (
    <div>
      <h1>Home Screen</h1>

      <Button color="red" onClick={auth.logout}>
        Cerrar sesión
      </Button>
    </div>
  );
};
