import * as Yup from "yup";

export const initialValues = () => ({
  image: null,
  name: "",
  artist: "",
});

export const validationSchema = () =>
  Yup.object({
    image: Yup.string().required(true),
    name: Yup.string().required(true),
    artist: Yup.string().required(true),
  });
