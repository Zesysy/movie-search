import React from "react";
import "./App.css";

import Header from "./Header";
import Footer from "./Footer";
import SearchMovies from "./SearchMovies";

function App() {
  return (
    <>
      <Header title="Movie Search" />
      <SearchMovies />
      <Footer myName="Sylène Manusset | 2020" />
    </>
  );
}

export default App;
