import React from "react";
import { useDispatch } from "react-redux";
import LoginButton from "./LoginButton";
import landing from "./img/landing.jpg";
import * as authActions from "../../actions/auth.actions";
import changeShade from "../../util/changeColorShade";

const Login: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const buttonInfo = [
    {
      text: "Login with Google",
      icon: "fab fa-google",
      link: "/auth/google",
      name: "google",
    },
    {
      text: "Login with Facebook",
      icon: "fab fa-facebook-f",
      link: "/auth/facebook",
      name: "facebook",
    },
    {
      text: "Login with GitHub",
      icon: "fab fa-github-alt",
      link: "/auth/github",
      name: "github",
    },
    {
      text: "Login with Reddit",
      icon: "fab fa-reddit-alien",
      link: "/auth/reddit",
      name: "reddit",
    },
    {
      text: "Browse as Guest",
      icon: "fas fa-male",
      link: "/",
      onClick: (): void => dispatch(authActions.browseAsGuest()),
      name: "guest",
    },
  ];
  return (
    <div
      className="login__container"
      style={{ backgroundImage: `url(${landing}) no-repeat center center fixed` }}
    >
      <div className="login-button__container">
        {buttonInfo.map((button) => (
          <LoginButton key={button.name} {...button} />
        ))}
      </div>
    </div>
  );
};

export default Login;
