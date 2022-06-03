import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import getLocationAutoComplete from "../../Api/AccuWeather";
import "./Search.css";

function Search() {
  const [citySearch, setCitySearch] = useState("");
  const [cityData, setCityData] = useState(null);

  return (
    <div className="container h-30">
      <div class="row h-30 justify-content-center align-items-center"></div>
      <InputGroup
        className="col-6"
        onSubmit={getLocationAutoComplete(citySearch)}
      >
        <FormControl
          placeholder="Search a city"
          aria-label="Search"
          aria-describedby="basic-addon2"
          value={citySearch}
          onChange={(e) => setCitySearch(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" type="submit">
          Go
        </Button>
      </InputGroup>
    </div>
  );
}

export default Search;
