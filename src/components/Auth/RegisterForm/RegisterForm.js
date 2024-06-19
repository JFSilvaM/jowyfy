import { Form, Icon } from "semantic-ui-react";
import "./RegisterForm.scss";

export const RegisterForm = (props) => {
  const { openLogin, goBack } = props;

  return (
    <div className="register-form">
      <h1>Empieza a escuchar con una cuenta de Jowyfy gratis</h1>

      <Form>
        <Form.Input
          type="text"
          placeholder="Correo electrónico"
          icon="mail outline"
        />

        <Form.Input
          type="password"
          placeholder="Contraseña"
          icon={
            <Icon
              name="eye"
              link
              onClick={() => console.log("Show password")}
            />
          }
        />

        <Form.Input
          type="text"
          placeholder="¿Cómo deberíamos llamarte?"
          icon="user circle outline"
        />

        <Form.Button type="submit" primary fluid>
          Continuar
        </Form.Button>
      </Form>

      <div className="register-form__options">
        <p onClick={goBack}>Volver</p>
        <p>
          ¿Ya tienes Jowyfy?<span onClick={openLogin}>Iniciar sesión</span>
        </p>
      </div>
    </div>
  );
};
