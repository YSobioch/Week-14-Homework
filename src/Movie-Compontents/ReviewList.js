import {useState} from 'react'
import Review from './Review'
import ReviewForm from './ReviewForm'

export default function ReviewList({reviewsList, handleChange}) {
    const[reviews, setReviews] = useState(reviewsList)
    let reviewList;

    if(reviews){
       reviewList = reviews.map((review) => (
            <Review key={review.id} review={review} />
        ))
    }
    
  return (
    <div className='container'>
        <br></br>
        <h6 className='d-flex'>Reviews:</h6>
        {reviewList}
        <ReviewForm handleSubmit={handleChange}/>
    </div>
  )
}
