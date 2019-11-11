import React from "react";
import LoginButton from "../misc/LoginButton";
import landing from "../../img/landing.jpg";

const Login: React.FC = (): JSX.Element => {
  return (
    <div
      className="login__container"
      style={{ backgroundImage: `url(${landing}) no-repeat center center fixed` }}
    >
      <LoginButton
        text="Login with Google"
        icon="fab fa-google"
        link="/auth/google"
        name="google"
      />
      <LoginButton
        text="Login with Facebook"
        icon="fab fa-facebook"
        link="/auth/facebook"
        name="facebook"
      />
      <LoginButton
        text="Login with GitHub"
        icon="fab fa-github"
        link="/auth/github"
        name="github"
      />
    </div>
  );
};

export default Login;
