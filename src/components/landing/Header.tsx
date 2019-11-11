import React, { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions/auth.actions";

const Header = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { image, firstName } = useSelector((state) => state.auth.profile);
  return (
    <div className="header__container">
      <p>
        Welcome, {firstName}.{" "}
        <span>
          Not you? <a href="/api/logout">Sign out</a>
        </span>
      </p>
      <Dropdown isOpen={open} toggle={() => setOpen(!open)}>
        <DropdownToggle tag="div" data-toggle="dropdown" aria-expanded={open}>
          <img src={image} alt="Profile" className="header__img" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Settings</DropdownItem>
          <DropdownItem onClick={(): void => dispatch(actions.logout())}>
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Header;
