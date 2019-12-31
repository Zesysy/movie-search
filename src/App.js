import React from "react";
import "./App.css";
import { Row, Col } from "reactstrap";

import Header from "./Header";
import Footer from "./Footer";
import SearchMovies from "./SearchMovies";
import Movie from "./Movie";

const allMovies = [
  {
    id: 1,
    Poster:
      "https://cdn.pixabay.com/photo/2012/11/04/08/19/film-64070_960_720.jpg",
    Title: "IronMan",
    Year: "2000",
    Plot: "The rich man"
  },
  {
    id: 2,
    Poster:
      "https://cdn.pixabay.com/photo/2012/11/04/08/19/film-64070_960_720.jpg",
    Title: "Batman",
    Year: "2001",
    Plot: "Man in black"
  },
  {
    id: 3,
    Poster:
      "https://cdn.pixabay.com/photo/2012/11/04/08/19/film-64070_960_720.jpg",
    Title: "Superman",
    Year: "2002",
    Plot: "The Man of Steel"
  },
  {
    id: 4,
    Poster:
      "https://cdn.pixabay.com/photo/2012/11/04/08/19/film-64070_960_720.jpg",
    Title: "Superman",
    Year: "2002",
    Plot: "The Man of Steel"
  },
  {
    id: 5,
    Poster:
      "https://cdn.pixabay.com/photo/2012/11/04/08/19/film-64070_960_720.jpg",
    Title: "IronMan",
    Year: "2000",
    Plot: "The rich man"
  },
  {
    id: 6,
    Poster:
      "https://cdn.pixabay.com/photo/2012/11/04/08/19/film-64070_960_720.jpg",
    Title: "Batman",
    Year: "2001",
    Plot: "Man in black"
  },
  {
    id: 7,
    Poster:
      "https://cdn.pixabay.com/photo/2012/11/04/08/19/film-64070_960_720.jpg",
    Title: "Superman",
    Year: "2002",
    Plot: "The Man of Steel"
  },
  {
    id: 8,
    Poster:
      "https://cdn.pixabay.com/photo/2012/11/04/08/19/film-64070_960_720.jpg",
    Title: "Superman",
    Year: "2002",
    Plot: "The Man of Steel"
  }
];

function App() {
  return (
    <>
      <Header title="Movie Search" />
      <SearchMovies />
      <section className="moviesSection">
        {allMovies.map(movie => (
          <Col lg="3">
            <Movie key={movie.id} movie={movie} />
          </Col>
        ))}
      </section>
      <Footer myName="Sylène Manusset | 2020" />
    </>
  );
}

export default App;
