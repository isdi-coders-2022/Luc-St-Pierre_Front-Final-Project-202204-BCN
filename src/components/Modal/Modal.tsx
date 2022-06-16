import { useCallback, useEffect } from "react";
import { closeModalActionCreator } from "../../redux/reducers/features/uiSlice/uiSlice";

import { useAppDispatch } from "../../redux/store/hooks";
import ModalStyled from "./ModalStyled";

const Modal = () => {
  const dispatch = useAppDispatch();

  const closeModal = useCallback(() => {
    dispatch(closeModalActionCreator());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [closeModal]);

  return (
    <ModalStyled>
      <div data-testid="modal" onClick={closeModal} className="modale" />
    </ModalStyled>
  );
};

export default Modal;
