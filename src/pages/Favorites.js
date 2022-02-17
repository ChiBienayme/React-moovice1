import React from 'react';
import Card from '../components/Card';
import styled from 'styled-components'
 
const storage = [];

class Favorites extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      favIDs: JSON.parse(localStorage.getItem("favIDs")) || []
    };

    this.getStorage = this.getStorage.bind(this);
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
   }


  getStorage(id) {
    this.setState ({
      movies: this.state.movies,
    });

    // If a movie has not yet been stored by its id, we push it into the temporary variable at the beginning  
    if (storage.indexOf(id) === -1) {
      storage.push(id);
    }
    localStorage.setItem("favIDs", JSON.stringify(storage));
   
  }

  getMovie(id) {

    fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=d1ef6d77dcfc2fd9eb704fa2044a4215`)
        .then((res) => res.json())
        .then((res) => {

          this.setState({ movies: [...this.state.movies, res] });
          console.log("RES", this.state.movies);

        })
        .catch(error => console.log(error));  

  }

  render() {
    return (
      <div>
          <h1>Favorites</h1>

          {this.state.favIDs === null && <h3> No saved favorites! </h3>}

          <div>
            {this.state.movies.length !== 0  && (
            
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
                
            )}
          </div>
          
      </div>
    )
  }
}

const StyledCard = styled.div`
  background-color: white;
  display: flex;
  padding: 0;
  border: 0px solid white;

  .button {
    background-color: white;
    width: 40vw;
    height: 80px;
    border: 0px solid white;
  }
  
`;

export default Favorites;