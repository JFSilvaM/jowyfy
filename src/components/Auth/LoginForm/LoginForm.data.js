import * as Yup from "yup";

export const initialValues = () => ({
  email: "",
  password: "",
});

export const validationSchema = () =>
  Yup.object({
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  });
