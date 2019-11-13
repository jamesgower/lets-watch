import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import * as tmdbActions from "../actions/tmdb.action";
import MovieCard from "./MovieCard";

interface Props {}

const TopMovies: React.FC<Props> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tmdbActions.fetchTopMovies());
  }, []);
  const { movies } = useSelector((state) => state.tmdb);

  return (
    <div>
      <h1>Popular Movies</h1>
      <Row>
        {movies &&
          movies.map((show) => (
            <Col key={show.id} sm={3}>
              <MovieCard posterLink={show.poster_path} title={show.title} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default TopMovies;
