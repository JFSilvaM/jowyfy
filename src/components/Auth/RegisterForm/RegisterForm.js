import { useFormik } from "formik";
import { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import { Auth } from "../../../api";
import { initialValues, validationSchema } from "./RegisterForm.data";
import "./RegisterForm.scss";

const auth = new Auth();

export const RegisterForm = (props) => {
  const { openLogin, goBack } = props;
  const [showPassword, setShowPassword] = useState(false);

  const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await auth.register(formValue.email, formValue.password);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="register-form">
      <h1>Empieza a escuchar con una cuenta de Jowyfy gratis</h1>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          name="email"
          type="text"
          placeholder="Correo electrónico"
          icon="mail outline"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />

        <Form.Input
          name="password"
          type={showPassword ? "texy" : "password"}
          placeholder="Contraseña"
          icon={
            <Icon
              name={showPassword ? "eye slash" : "eye"}
              link
              onClick={onShowHidenPassword}
            />
          }
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}
        />

        <Form.Input
          name="username"
          type="text"
          placeholder="¿Cómo deberíamos llamarte?"
          icon="user circle outline"
          onChange={formik.handleChange}
          value={formik.values.username}
          error={formik.errors.username}
        />

        <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
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
