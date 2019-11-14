import React from "react";
import { Container } from "reactstrap";
import Header from "./Header";
import TopMedia from "../TopMedia";

const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Container>
        <h2 className="home__title">Popular Movies</h2>
        <TopMedia type="movies" autoplay={2000} />
        <h2 className="home__title">Popular TV Shows</h2>
        <TopMedia type="tv" autoplay={2500} />
      </Container>
    </div>
  );
};

export default Home;
