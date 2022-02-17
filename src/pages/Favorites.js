import React from 'react';
import Card from '../components/Card';
import styled from 'styled-components';

class Favorites extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      favIDs: this.getStorage(),
    };

    this.getStorage = this.getStorage.bind(this);
    this.getMovie = this.getMovie.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {

    this.state.favIDs.map((id) => {
      this.getMovie(id)
    })
  }

  handleDelete(id) {
    this.setState ({
      favIDs: this.state.movies.clear(),
    });

    // this.state.movies.keys().then((names) => {
    //   names.forEach((name) => {
    //     this.state.movies.delete(name);
    //   });
    // });
    // alert('Complete Cache Cleared')
  }

  getStorage() {
    //get the history favorites in console
    let storage = JSON.parse(localStorage.getItem("favorites")); 
    let storedID = JSON.parse(localStorage.getItem("favIDs"));
    //combine 2 histories of favorites
    return storage.concat(storedID); 
   
  }

  getMovie(id) {
    fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=d1ef6d77dcfc2fd9eb704fa2044a4215`)
        .then((res) => res.json())
        .then((res) => {

          this.setState({ movies: [...this.state.movies, res] });

        })
        .catch(error => console.log(error));  
  }

  render() {
    return (
      <div>
          <h1>Favorites</h1>

          {this.state.favIDs === null && <h3> No saved favorites! </h3>}

          <div>
            <button className="btn btn-danger m-3"  onClick={() => this.handleDelete(this.state.movie.id)} > Delete </button>

            {this.state.movies.length !== 0  && (

              <StyledCard className="container">
                  {this.state.movies.map((movie) => {
                    return (
                        <>
                          <Card
                            image={movie.poster_path}
                            title={movie.title}
                            year={movie.release_date}
                            description={movie.overview}
                            key={movie}
                            />
  
                        </>
                    )    
                  })}
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
  width: 40vw;
  
`;

export default Favorites;