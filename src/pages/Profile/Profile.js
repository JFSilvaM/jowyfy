import { useState } from "react";
import { Button } from "semantic-ui-react";
import { User } from "../../api";
import {
  AvatarUpdate,
  DisplayNameUpdateForm,
  EmailUpdateForm,
  PasswordUpdateForm,
} from "../../components/Profile";
import { BasicModal } from "../../components/Shared";
import "./Profile.scss";

const userController = new User();

export const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);
  const [titleModal, setTitleModal] = useState("");

  const { displayName, email } = userController.getMe();

  const onCloseModal = () => {
    setShowModal(false);
    setContentModal(null);
    setTitleModal("");
  };

  const openForm = (type) => {
    if (type === "displayName") {
      setContentModal(<DisplayNameUpdateForm onClose={onCloseModal} />);
      setTitleModal("Actualizar nombre y apellidos");
    }

    if (type === "email") {
      setContentModal(<EmailUpdateForm onClose={onCloseModal} />);
      setTitleModal("Actualizar email");
    }

    if (type === "password") {
      setContentModal(<PasswordUpdateForm onClose={onCloseModal} />);
      setTitleModal("Actualizar contraseña");
    }

    setShowModal(true);
  };

  return (
    <>
      <div className="profile">
        <h1>Configuración</h1>

        <div className="profile__block">
          <div>
            <AvatarUpdate />

            <span>{displayName}</span>
          </div>

          <Button onClick={() => openForm("displayName")}>Actualizar</Button>
        </div>

        <div className="profile__block">
          <span>Email: {email}</span>

          <Button onClick={() => openForm("email")}>Actualizar</Button>
        </div>

        <div className="profile__block">
          <span>Contraseña: *** *** *** ***</span>

          <Button onClick={() => openForm("password")}>Actualizar</Button>
        </div>
      </div>

      <BasicModal
        show={showModal}
        onClose={onCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
};
