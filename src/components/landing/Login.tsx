import React from "react";
import LoginButton from "../misc/LoginButton";

const Login: React.FC = (): JSX.Element => {
  return (
    <div>
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
    </div>
  );
};

export default Login;
