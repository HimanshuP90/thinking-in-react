import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChangeSearch = (q) => {
      setText(q);
      getQuery(q);
  }
  return (
    <section className="search">
      <form>
        <input 
          type="text"
          className="form-control"
          placeholder="Search character"
          value={text}
          onChange={(e) => onChangeSearch(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
