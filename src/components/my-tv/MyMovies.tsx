import React, { Component } from "react";
import { connect } from "react-redux";
import Result from "../containers/Result";
import * as actions from "../../actions/auth.actions";
import NavBar from "../navbar/NavBar";
import { AuthState, ProfileState } from "../../interfaces/app.i";

interface Props {
  fetchUser: () => void;
  profile: ProfileState;
}

class MyMovies extends Component<Props> {
  public constructor(props) {
    super(props);
    const { fetchUser } = this.props;
    fetchUser();
  }

  public render(): JSX.Element {
    const { profile } = this.props;
    return profile ? (
      <div className="tv__container">
        <NavBar />
        {profile.movies ? (
          profile.movies.map(
            (show): JSX.Element => <Result key={show} id={show} type="movie" />,
          )
        ) : (
          <p>Add some tv shows to see them here! </p>
        )}
      </div>
    ) : (
      <p>Loading</p>
    );
  }
}

const mapStateToProps = ({ auth: { profile } }): AuthState => ({ profile });

export default connect(mapStateToProps, actions)(MyMovies);
