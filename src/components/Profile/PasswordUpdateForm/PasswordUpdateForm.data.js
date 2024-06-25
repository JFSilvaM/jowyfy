import * as Yup from "yup";

export const initialValues = () => ({
  password: "",
  newPassword: "",
  repeatNewPassword: "",
});

export const validationSchema = () =>
  Yup.object({
    password: Yup.string().required(true),
    newPassword: Yup.string().min(6, true).required(true),
    repeatNewPassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("newPassword")], true),
  });
