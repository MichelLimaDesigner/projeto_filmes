import React, { Component } from 'react';
import "./home.css";
import { Link } from 'react-router-dom';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
        this.loadMovies = this.loadMovies.bind(this);
    }

    componentDidMount() {
        this.loadMovies();
    }

    loadMovies(){
        // API url
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes/';

        fetch(url)
        .then( response => response.json())
        .then( json => {
            this.setState({ movies: json });
        })
    }

    render(){
        return(
            <div className="app">
                <div className="movies">
                    <div className="movies__list">
                        { this.state.movies.map( (e) => {
                            return(
                                <article className="movies__item" key={e.id}>
                                    <Link to={'/filmes/' + e.id} className="movies__link">
                                        <strong className="movies__title"> { e.nome } </strong>
                                        <div className="movies__shadow"></div>
                                        <img src={e.foto} alt={e.nome} />
                                    </Link>
                                </article>
                            )
                        }) }
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;