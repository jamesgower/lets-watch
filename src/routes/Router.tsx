import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useSelector } from "react-redux";
import NotFoundPage from "../components/misc/NotFoundPage";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import MyTV from "../components/my-tv/MyTV";
import MyMovies from "../components/my-tv/MyMovies";
import Movies from "../components/tv/Movies";
import TVShows from "../components/tv/TVShows";
import { AppState } from "../interfaces/app.i";

const history = createBrowserHistory();

const AppRouter: React.SFC = (): JSX.Element => {
  const profile = useSelector((state: AppState) => state.auth.profile);
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={profile ?? false ? Home : Login} />
        <Route path="/my-tv-shows" component={MyTV} />
        <Route path="/my-movies" component={MyMovies} />
        <Route path="/movies" component={Movies} />
        <Route path="/tv-shows" component={TVShows} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
