import React, { useState } from "react";
import "./Search.css";

function Search() {
  const [query, setQuery] = useState("");

    const search = async (event) => {
      if (event.key === "Enter") {
        const data = await fetchweather(query);

        setWeather(data);
        setQuery("");
      }
    };

  <div>
    <input
      type="text"
      className="search"
      placeholder="Search a city"
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      onKeyPress={search}
    />
  </div>;
}

export default Search;
