/* eslint-disable no-return-assign */
import React from "react";

interface LoginProps {
  icon: string;
  text: string;
  link: string;
  name: string;
}

const LoginButton: React.FC<LoginProps> = ({ icon, text, link, name }): JSX.Element => {
  return (
    <button
      className={`btn btn__${name}`}
      type="button"
      onClick={(): string => (window.location.href = link)}
    >
      <i className={`login__icon ${icon}`} />
      {text}
    </button>
  );
};

export default LoginButton;
