import { Button } from "semantic-ui-react";
import "./AuthOptions.scss";

export const AuthOptions = (props) => {
  const { openLogin, openRegister } = props;

  return (
    <div className="auth-options">
      <h1>Millones de canciones, gratis en Jowyfy</h1>

      <Button className="register" onClick={openRegister}>
        Regístrate gratis
      </Button>
      <Button className="login" onClick={openLogin}>
        Inicia sesión
      </Button>
    </div>
  );
};
