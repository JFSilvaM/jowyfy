import { Button } from "semantic-ui-react";

export const RegisterForm = (props) => {
  const { openLogin, goBack } = props;

  return (
    <div style={{ backgroundColor: "blue" }}>
      <h1>RegisterForm</h1>

      <Button primary onClick={openLogin}>
        Login
      </Button>
      <Button secondary onClick={goBack}>
        Atrás
      </Button>
    </div>
  );
};
