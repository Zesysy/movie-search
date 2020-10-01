import React, { useEffect, useReducer } from "react";
import "./App.css";
import { Col, Spinner } from "reactstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchMovies from "./components/SearchMovies";
import Movie from "./components/Movie";
import { reducer, initialState } from "./reducer";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=ec92b916"; // API URL with my own key
const proxyurl = "https://cors-anywhere.herokuapp.com/";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // When mounting the component, launch the fetch method to retrieve all the films containing "man" in their title
    // Use a CORS proxy to get around “No Access-Control-Allow-Origin header” problems
    fetch(proxyurl + MOVIE_API_URL)
      .then((response) => response.json()) // Recover data in json format
      .then((jsonResponse) => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search, // Filled movies with data received
        });
      });
  }, []);

  const search = (searchValue) => {
    //method which will make it possible to search for a film by its name in the API
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=ec92b916`) // searchValue represents the input retrieved in the search bar
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error,
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state; // Destructuring of state data

  return (
    <>
      <Header title="Lovely Movie" />
      <SearchMovies search={search} />
      <section className="moviesSection">
        {loading && !errorMessage ? (
          <Spinner
            style={{ width: "3rem", height: "3rem" }}
            type="grow"
            color="danger"
          />
        ) : errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          movies.map((movie, key) => (
            <Col key={key} lg="3">
              <Movie movie={movie} />
            </Col>
          ))
        )}
      </section>
      <Footer myName="Sylène Manusset | 2020" />
    </>
  );
}

export default App;
