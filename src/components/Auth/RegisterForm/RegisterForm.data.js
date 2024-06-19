import * as Yup from "yup";

export const initialValues = () => ({
  email: "",
  password: "",
  username: "",
});

export const validationSchema = () =>
  Yup.object({
    email: Yup.string().email(true).required(true),
    password: Yup.string().min(6, true).required(true),
    username: Yup.string().required(true),
  });
