import React from "react";

interface MovieCardProps {
  posterLink: string;
  title: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ posterLink, title }) => {
  return (
    <div>
      <img src={`http://image.tmdb.org/t/p/w185/${posterLink}`} />
      <p>{title}</p>
    </div>
  );
};

export default MovieCard;
