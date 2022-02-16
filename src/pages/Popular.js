import React from "react";
import Card from "../components/Card";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

class Popular extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d1ef6d77dcfc2fd9eb704fa2044a4215`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("RES", res);

        this.setState({ movies: res.results });
        console.log(this.state.movies);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <h1> Popular </h1>
        <StyledCard className="container">
          {this.state.movies.map((movie) => (
            <Card
              image={movie.poster_path}
              title={movie.title}
              year={movie.release_date}
              description={movie.overview}
              key={movie}
            />
          ))}
        </StyledCard>
      </div>
    );
  }
}

const StyledCard = styled.div`
  background-color: white;
  display: flex;
  padding: 0;
  border: 0px solid white;

  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
`;

export default Popular;
