import React from 'react'
import Card from '../components/Card';

class Popular extends React.Component {
    constructor(){
        super();

        this.state= {
            movies: [],
        };

    }


    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d1ef6d77dcfc2fd9eb704fa2044a4215`)
        .then((res) => res.json())
        .then((res) => {
        console.log("RES", res);

        this.setState({ movies: res.results });
        console.log(this.state.movies);
        })
        .catch(error => console.log(error));
       
    }

    render() {
        return (
            <div>
                <h1> Popular </h1>
                <div>
                {this.state.movies.map((movie) => (
                    <Card
                    image={movie.poster_path}
                    title={movie.title}
                    year={movie.release_date}
                    description={movie.overview}
                    key={movie}
                    />
                ))}
                </div>
            </div>
        )
    }
}

export default Popular