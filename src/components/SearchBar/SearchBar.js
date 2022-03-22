import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div style={{ marginBottom: "10px" }}>
          <label>Video Search</label>
        </div>
        <div className="field">
          <div class="ui icon input">
            <i class="search icon"></i>
            <input
              type="text"
              placeholder="Search..."
              value={term}
              onChange={onInputChange}
            />
          </div>
        </div>
        <button className="medium ui black button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
