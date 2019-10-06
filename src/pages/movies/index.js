import React, { Component } from 'react';
import './movie.css';

class Movie extends Component{
    constructor(props){
        super(props);
        this.state = {
            movie: []
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;

        fetch(url)
        .then( response => response.json() )
        .then( json =>{
            this.setState({ movie: json });
        });
    }

    render() {
        return (
            <div>
                <article className="movie">
                    <h1 className="movie__title"> { this.state.movie.nome } </h1>

                    <figure className="movie__img">
                        <img src={this.state.movie.foto} alt={this.state.movie.nome}/>
                    </figure>
                    
                    <section className="movie__content">
                        { this.state.movie.length !== 0 ? <h3> Sinopse </h3> : ''}

                        <p className="movie__descri"> { this.state.movie.sinopse } </p>
                    </section>
                </article>
            </div>
        );
    }
}

export default Movie;