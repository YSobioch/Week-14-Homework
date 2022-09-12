import React, { Component } from 'react'
import Movie from "./Movie"

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: props.movies
        }
    }

  render() {
    const liststyle = {
        margin: 'auto',
        width: '900px'
    }

    let movie = [];

    
    for(let i=0; i < this.state.movies.length; i=i+2){
        if(i+1 === this.state.movies.length){
            movie.push(
                <div className='row'>
                    <div className='col-sm-6'>
                        <Movie key={i} {...this.state.movies[i]}/>
                    </div>
                </div>
            )
            break;
        }
            movie.push(
            <div className='row'>
                <div className='col-sm-6'>
                    <Movie key={i} {...this.state.movies[i]}/>
                </div>
                <div className='col-sm-6'>
                    <Movie key={i} {...this.state.movies[i + 1]}/>
                </div>
            </div>
        )
    }
    

    return (
        <div className="container" style={liststyle}>
            {movie}
            
        </div>

    )
  }
}
