import React from "react";
import { CardHeader, Card, CardImg, CardText, CardBody } from "reactstrap";

const Movie = ({ movie }) => {
  return (
    <div className="movieCard">
      <Card className="border-dark" style={{ maxWidth: "25rem" }}>
        <CardHeader>{movie.Title}</CardHeader>
        <CardImg top alt={movie.Title} src={movie.Poster} />
        <CardBody>
          <CardText>
            {movie.Plot}
            <small className="text-muted"> ({movie.Year})</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Movie;
