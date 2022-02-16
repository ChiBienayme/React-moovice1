import React from 'react'
import Card from '../components/Card';




class PopularBattle extends React.Component {
    constructor(){
        super();

        this.state= {
            movies: [],
            currentBattle: 0,
            favorites: JSON.parse(localStorage.getItem("favorites")),

        };
        this.choseMovie = this.choseMovie.bind(this);
    }

    // API 
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d1ef6d77dcfc2fd9eb704fa2044a4215`)
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

      
    }

    render() {
        return (
            <div>
                <h1> Popular Battle </h1>

                <div>
                  {this.state.movies.length !== 0 &&  (
                    <>
                      <button onClick={() => this.choseMovie(this.state.movies[this.state.currentBattle].id)} >

                        <Card
                          image={this.state.movies[this.state.currentBattle].poster_path}
                          title={this.state.movies[this.state.currentBattle].title}
                          year={this.state.movies[this.state.currentBattle].release_date}
                          description={this.state.movies[this.state.currentBattle].overview}
                          key={this.state.movies[this.state.currentBattle]}
                        /> 
                      </button>   

                      <button onClick={() => this.choseMovie(this.state.movies[this.state.currentBattle + 1].id)} >

                        <Card
                          image={this.state.movies[this.state.currentBattle + 1].poster_path}
                          title={this.state.movies[this.state.currentBattle + 1].title}
                          year={this.state.movies[this.state.currentBattle + 1].release_date}
                          description={this.state.movies[this.state.currentBattle + 1].overview}
                          key={this.state.movies[this.state.currentBattle + 1]}
                        /> 
                      </button> 

                    </>
                      
                  )}
                </div>
            </div>
        )
    }
}


export default PopularBattle;