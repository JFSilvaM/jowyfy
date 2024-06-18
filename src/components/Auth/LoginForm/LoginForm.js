import { Button } from "semantic-ui-react";

export const LoginForm = (props) => {
  const { openRegister, goBack } = props;

  return (
    <div style={{ backgroundColor: "magenta" }}>
      <h1>LoginForm</h1>

      <Button primary onClick={openRegister}>
        Registro
      </Button>
      <Button secondary onClick={goBack}>
        Atrás
      </Button>
    </div>
  );
};
