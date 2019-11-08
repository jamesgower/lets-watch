import React from "react";

const Login: React.FC = (): JSX.Element => {
  return (
    <div>
      <a className="btn btn-danger" href="/auth/google">
        <i className="fab fa-google" />
        Login with Google
      </a>
    </div>
  );
};

export default Login;
