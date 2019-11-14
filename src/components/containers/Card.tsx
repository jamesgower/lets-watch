import React, { useState } from "react";
import Modal from "./Modal";

interface CardProps {
  posterLink: string;
  title: string;
  id: number;
  type: string;
}

const Card: React.FC<CardProps> = ({ posterLink, title, id, type }) => {
  const [open, isOpen] = useState(false);
  return (
    <>
      <div
        className="card__container"
        role="button"
        tabIndex={0}
        onClick={(): void => isOpen(true)}
      >
        <img
          className="card__image"
          src={`http://image.tmdb.org/t/p/w300/${posterLink}`}
          alt={title}
        />
      </div>
      {open && (
        <Modal
          isOpen={open}
          closeModal={() => isOpen(false)}
          id={id}
          type={type === "tv" ? "tv" : "movie"}
        />
      )}
    </>
  );
};

export default Card;
