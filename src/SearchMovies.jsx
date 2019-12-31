import React, { useState } from "react";
import { InputGroup, InputGroupAddon, Input, Button, Form } from "reactstrap";

const SearchMovies = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = event => {
    event.preventDefault(); // To cancel the default behavior of the form submit
    setSearchValue(event.target.value); // Method that changes the searchValue state as you enter a new letter
  };

  return (
    <Form>
      <InputGroup>
        <Input
          className="inputForm"
          value={searchValue} // Target
          onChange={handleChange}
        />
        <InputGroupAddon addonType="append">
          <Button type="submit" color="info">
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
};

export default SearchMovies;
