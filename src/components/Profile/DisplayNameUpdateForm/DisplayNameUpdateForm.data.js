import * as Yup from "yup";

export const initialValues = (name) => ({
  displayName: name || "",
});

export const validationSchema = () =>
  Yup.object({ displayName: Yup.string().required(true) });
