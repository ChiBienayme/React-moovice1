import React from 'react'
import Card from '../components/Card';
import styled from 'styled-components';

// import the module "moment": npm i moment
import moment from 'moment';

// TODAY
const today = moment().format("YYYY-MM-DD");
console.log(today);

// LAST_WEEK
const lastWeek = moment().add(-7, "days").format("YYYY-MM-DD");
console.log(lastWeek);

//  Create a temporary variable of storage
const history = [];

class WeeklyBattle extends React.Component {
  constructor(){
    super();

    this.state= {
        movies: [],
        currentBattle: 0,

        // localStorage.getItem("favorites"): Get the value of the specified local storage item
        // JSON.parse(): convert text into a JavaScript object
        favorites: JSON.parse(localStorage.getItem("favorites")),

    };
    this.choseMovie = this.choseMovie.bind(this);
  }

  // API 
  componentDidMount() {
      fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=d1ef6d77dcfc2fd9eb704fa2044a4215`)
      .then((res) => res.json())
      .then((res) => {

        this.setState({ movies: res.results });

      })
      .catch(error => console.log(error));  
  }

  //  Chose 2 first movies
  choseMovie(id) {
    this.setState({

      currentBattle: this.state.currentBattle + 2,

    });

    // If a movie has not yet been stored by its ID, we push it into the temporary variable at the beginning  
    if (history.indexOf(id) === -1) {
      history.push(id);
    }

    // JSON.stringify: convert it into a string
    // Save the history in console
    localStorage.setItem("favorites", JSON.stringify(history));
  }

  render() {
    return (
      <div>
          <h1> Weekly Battle </h1>

          {/* Click 10 times for 20 films => Show the message */}
          {history.length === 10 && <h3> Vous avez parcouru tous les films !</h3>}

          <div>
            {this.state.movies.length !== 0 && history.length < 10 && (
            
              <StyledCard>
                {/* Card Film 1  */}
                <button className="button" onClick={() => this.choseMovie(this.state.movies[this.state.currentBattle].id)} >

                  <Card
                    image={this.state.movies[this.state.currentBattle].poster_path}
                    title={this.state.movies[this.state.currentBattle].title}
                    year={this.state.movies[this.state.currentBattle].release_date}
                    description={this.state.movies[this.state.currentBattle].overview}
                    key={this.state.movies[this.state.currentBattle]}
                  /> 
                </button>  

                {/* Card Film 2  */}
                <button className="button" onClick={() => this.choseMovie(this.state.movies[this.state.currentBattle + 1].id)} >

                  <Card
                    image={this.state.movies[this.state.currentBattle + 1].poster_path}
                    title={this.state.movies[this.state.currentBattle + 1].title}
                    year={this.state.movies[this.state.currentBattle + 1].release_date}
                    description={this.state.movies[this.state.currentBattle + 1].overview}
                    key={this.state.movies[this.state.currentBattle + 1]}
                  /> 
                </button> 

              </StyledCard>
                
            )}
          </div>

        </div>
    )
  }
}

const StyledCard = styled.button`
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


export default WeeklyBattle;