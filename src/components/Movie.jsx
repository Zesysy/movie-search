import React from "react";
import { CardHeader, Card, CardImg, CardText, CardBody } from "reactstrap";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://cdn.pixabay.com/photo/2012/11/04/08/19/film-64070_960_720.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster; // Display condition because some films do not have a poster

  return (
    <div className="movieCard">
      <Card className="border-dark" style={{ maxWidth: "25rem" }}>
        <CardHeader>{movie.Title}</CardHeader>
        <CardImg
          top
          alt={movie.Title}
          src={poster}
          style={{ height: "30rem" }}
        />
        <CardBody>
          <CardText>{movie.Year}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Movie;
