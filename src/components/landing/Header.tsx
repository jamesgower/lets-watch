import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import * as actions from "../../actions/auth.actions";

const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={(): void => dispatch(actions.logout())}>Logout</Button>
    </div>
  );
};

export default Header;
