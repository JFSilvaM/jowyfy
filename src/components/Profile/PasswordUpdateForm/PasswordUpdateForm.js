import { useFormik } from "formik";
import { useState } from "react";
import { Form } from "semantic-ui-react";
import { User } from "../../../api";
import { initialValues, validationSchema } from "./PasswordUpdateForm.data";

const userController = new User();

export const PasswordUpdateForm = (props) => {
  const { onClose } = props;
  const [showPassword, setShowPassword] = useState(false);

  const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userController.updateUserPassword(
          formValue.password,
          formValue.newPassword
        );
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="Contraseña actual"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: onShowHidenPassword,
        }}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />

      <Form.Input
        name="newPassword"
        type={showPassword ? "text" : "password"}
        placeholder="Nueva contraseña"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: onShowHidenPassword,
        }}
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        error={formik.errors.newPassword}
      />

      <Form.Input
        name="repeatNewPassword"
        type={showPassword ? "text" : "password"}
        placeholder="Repetir la nueva contraseña"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: onShowHidenPassword,
        }}
        value={formik.values.repeatNewPassword}
        onChange={formik.handleChange}
        error={formik.errors.repeatNewPassword}
      />

      <Form.Button type="submit" fluid primary loading={formik.isSubmitting}>
        Actualizar contraseña
      </Form.Button>
    </Form>
  );
};
