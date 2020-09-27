import React from "react";
//local
import search from "../img/svg/search-input.svg";

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="поиск" />
      <img src={search} alt="search" />
    </div>
  );
};

export default Search;
