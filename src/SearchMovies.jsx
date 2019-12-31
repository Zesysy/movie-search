import React from "react";
import { InputGroup, InputGroupAddon, Input, Button, Form } from "reactstrap";

const SearchMovies = () => {
  return (
    <Form>
      <InputGroup>
        <Input className="inputForm" />
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
