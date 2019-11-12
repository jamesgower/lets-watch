import React, { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions/auth.actions";

const Header = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { image } = useSelector((state) => state.auth.profile);
  return (
    <div className="header__container">
      <div className="header__links-container">
        <p className="header__link">Discover</p>
        <p className="header__link">TV Shows</p>
        <p className="header__link">Movies</p>
      </div>
      <Dropdown isOpen={open} toggle={(): void => setOpen(!open)}>
        <DropdownToggle tag="div" data-toggle="dropdown" aria-expanded={open}>
          <img src={image} alt="Profile" className="header__img" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header>Profile</DropdownItem>
          <DropdownItem>My TV Shows</DropdownItem>
          <DropdownItem>My Movies</DropdownItem>
          <DropdownItem>My Ratings</DropdownItem>
          <DropdownItem header>Settings</DropdownItem>
          <DropdownItem>
            <Link to="/account">Account</Link>
          </DropdownItem>
          <DropdownItem onClick={(): void => dispatch(actions.logout())}>
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Header;
