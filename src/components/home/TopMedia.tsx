import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "reactstrap";
import * as tmdbActions from "../../actions/tmdb.action";
import Card from "../containers/Card";
import { AppState } from "../../interfaces/app.i";
import Carousel from "../containers/Carousel";

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
            breakpoints: {
              1200: {
                perView: 3,
              },
              768: {
                perView: 2,
                peek: 50,
              },
            },
            autoplay,
            animationTimingFunc: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            direction: type === "movies" ? "ltr" : "rtl",
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
