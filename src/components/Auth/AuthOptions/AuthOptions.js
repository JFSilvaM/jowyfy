import { Button } from "semantic-ui-react";

export const AuthOptions = (props) => {
  const { openLogin, openRegister } = props;

  return (
    <div style={{ backgroundColor: "purple" }}>
      <h1>AuthOptions</h1>

      <Button primary onClick={openRegister}>
        Registro
      </Button>
      <Button secondary onClick={openLogin}>
        Login
      </Button>
    </div>
  );
};
