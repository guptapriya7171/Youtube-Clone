import React, { useState } from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import {useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState("");

  const history = useHistory()
  const handleSubmit = (e) =>{
    e.preventDefault()
    history.push(`search/${input}`)
  }

  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu"
        size={27}
        onClick={() => handleToggleSidebar()}
      />

      <Link to="/">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
        alt="LogoImg"
        className="header__logo"
      /></Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://w7.pngwing.com/pngs/193/660/png-transparent-computer-icons-woman-avatar-avatar-girl-thumbnail.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
