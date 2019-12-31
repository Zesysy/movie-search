import React, { useState } from "react";
import { InputGroup, InputGroupAddon, Input, Button, Form } from "reactstrap";
import PropTypes from "prop-types";

const SearchMovies = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = event => {
    event.preventDefault(); // To cancel the default behavior
    setSearchValue(event.target.value); // Method that changes the searchValue state as you enter a new letter
  };

  const resetInputField = () => {
    setSearchValue(""); // Resets the searchValue state to zero
  };

  const handleSubmit = e => {
    e.preventDefault(); // To cancel the default behavior
    search(searchValue);
    resetInputField();
  };

  return (
    <Form onSubmit={handleSubmit}>
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

SearchMovies.propTypes = {
  search: PropTypes.func.isRequired
};

export default SearchMovies;
