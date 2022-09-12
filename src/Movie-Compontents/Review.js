import React from 'react'

export default function Review({review}) {
  const myStyle= {
    height: '40px',
    width: '40px'
  }

  return (
    <div>
      <div className='card'>
        <div className="d-flex p-2">
          <img src='/user-image.jpg' style={myStyle} /><span>{review.name}</span>
        </div>
      <div className='card-body'>
          <p>{review.review}</p>
      </div>
      </div> <br></br>
    </div>
  )
}


