import * as Yup from "yup";

export const initialValues = () => ({
  file: null,
  name: "",
});

export const validationSchema = () =>
  Yup.object({
    file: Yup.string().required(true),
    name: Yup.string().required(true),
  });
