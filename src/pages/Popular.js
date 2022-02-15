import React from 'react'
import Card from '../components/Card';

class Popular extends React.Component {
    constructor(){
        super();
        this.state= {
            movies: [],
        };
        this.getMovies = this.getMovies.bind(this)
    }

    componentDidMount() {
		this.getMovies("");
	}


    getMovies() {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={TheMovieDatabaseAS3}`)
        .then((res) => res.json())
        .then((res) => {
        console.log(res);
        this.setState({ image: res[0].image.png,
                        title: res[0].title,
                        year: res[0].year,
                        description: res[0].description,
                        
                        });
        })
        .catch(error => console.log(error));
       
    }

    render() {
        return (
            <div>
                <h1> Popular </h1>
                <Card 
                    image={this.state.image}
                    title={this.state.title}
                    year={this.state.year}
                    description={this.state.description}

                />
            </div>
        )
    }
}

export default Popular