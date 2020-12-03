import SearchIcon from "@material-ui/icons/Search";

import React from "react";

import "./Header.css";
import Logo from "./robinhood.svg";

function Header() {
  return (
    <div className="header__wrapper">
      {/* logo */}
      <div className="header__logo">
        <img src={Logo} width={25} alt="" />
      </div>
      {/* Search */}
      <div className="header__search">
        <div className="header__searchContainer">
          <SearchIcon />
          <input type="search" placeholder="searchBar" />
        </div>
      </div>
      {/* menuItems */}
      <div className="header__menuItems">
        <a href="#">Free Stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
}

export default Header;
