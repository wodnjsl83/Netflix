import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="Menu">
        <img src="images/logo.png" />

        <button>
          <a href="/login">Sign In</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
