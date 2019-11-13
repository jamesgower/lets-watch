import React from "react";
import { Container } from "reactstrap";
import Header from "./Header";
import TopMovies from "../TopMovies";

const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Container>
        <TopMovies />
        {/* <TopTv /> */}
      </Container>
    </div>
  );
};

export default Home;
