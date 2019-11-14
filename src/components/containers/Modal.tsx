import React, { useEffect } from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import * as tmdbActions from "../../actions/tmdb.action";
import { AppState } from "../../interfaces/app.i";
import spinner from "./spinner.gif";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  id: number;
  type: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, id, type }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tmdbActions.fetchCurrentData(id, type));
  }, []);
  const { current } = useSelector((state): AppState => state.tmdb);
  const styles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      minWidth: "400px",
      minHeight: "600px",
    },
  };
  ReactModal.setAppElement("#app");
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={styles}
      contentLabel="Example Modal"
    >
      {current ? (
        <div className="modal__container">
          <img
            className="modal__poster"
            alt={current.title}
            src={`http://image.tmdb.org/t/p/w300/${current.poster}`}
          />
          <p className="modal__title">
            {current.title}
            {current.tagline && (
              <span className="modal__tagline">{` - ${current.tagline}`}</span>
            )}
          </p>
          <p className="modal__text">Genres: {current.genres}</p>
          <p className="modal__text">Overview: {current.overview}</p>
          <p className="modal__text">Rating: {current.rating}/10</p>
          <p className="modal__text">Language: {current.language}</p>
          <a href={current.homepage} className="modal__text">
            Homepage
          </a>
          <p className="modal__text">Release date: {current.releaseDate}</p>
        </div>
      ) : (
        <img src={spinner} />
      )}
    </ReactModal>
  );
};

export default Modal;
