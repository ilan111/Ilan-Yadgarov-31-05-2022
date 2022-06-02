import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import "./Search.css";

function Search() {
  //   const [query, setQuery] = useState("");

  //     const search = async (event) => {
  //       if (event.key === "Enter") {
  //         const data = await fetchweather(query);

  //         setWeather(data);
  //         setQuery("");
  //       }
  //     };
  return (
    <div className="container h-30">
      <div class="row h-30 justify-content-center align-items-center"></div>
      <InputGroup className="col-6">
        <FormControl
          placeholder="Search a city"
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Go
        </Button>
      </InputGroup>
    </div>
  );
}

export default Search;
