import React, { Component } from 'react'
import ReviewList from './ReviewList'
import ToggleVisibility from './Show&Hide'

export default class Movie extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            synopsis: props.syn,
            poster: props.poster,
            reviews: this.props.reviews
        }
        this.addReview = this.addReview.bind(this)
    }

    addReview = (text) => {
      let userReview = {
          name: 'User',
          review: text,
          id: 4
      }
      
      this.setState(state => {
        state.reviews.push(userReview)
      })
    }


  render() {

    const imagestyle = {
        width: 'fill',
        height: '200px',
        
    }

    return (
      <div className='container'>
        <div className="card">
            <img className="card-img-top" style={imagestyle} src={this.props.poster} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.state.synopsis}</p>
                <div>
                    <ToggleVisibility>
                      <ReviewList reviewsList={this.state.reviews} handleChange={this.addReview}/>
                    </ToggleVisibility>    
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        </div>
    )
  }
}
