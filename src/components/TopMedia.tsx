import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "reactstrap";
import * as tmdbActions from "../actions/tmdb.action";
import Card from "./containers/Card";
import { AppState } from "../interfaces/app.i";
import Carousel from "./containers/Carousel";

interface Props {
  type: string;
  autoplay: number;
}

const TopMedia: React.FC<Props> = ({ type, autoplay }) => {
  const media = useSelector((state: AppState) => state.tmdb[type]);
  const dispatch = useDispatch();
  useEffect(() => {
    type === "movies"
      ? dispatch(tmdbActions.fetchTopMovies())
      : dispatch(tmdbActions.fetchTopTV());
  }, []);

  return (
    <Row>
      {media && (
        <Carousel
          options={{
            type: "carousel",
            perView: 5,
            focusAt: "center",
            autoplay,
          }}
          element={type}
        >
          {media.map((show) => {
            return (
              <Card
                id={show.id}
                key={show.id}
                posterLink={show.poster_path}
                title={show.title}
                type={type}
              />
            );
          })}
        </Carousel>
      )}
    </Row>
  );
};

export default TopMedia;
