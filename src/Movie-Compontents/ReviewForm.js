import { useState } from 'react'

export default function ReviewForm({handleSubmit}) {
  const [text, setText] = useState('')
  const isTextareaDisabled = text.length === 0;

  const onSubmit = event => {
    event.preventDefault()
    handleSubmit(text)
    setText('')
  }
  
  return (
    <form onSubmit={onSubmit}>
      <div>
      <textarea 
         value={text} 
         onChange={(e) => setText(e.target.value)}
         /> <br></br>
         <button 
         className='btn btn-primary' 
         disabled={isTextareaDisabled}
         >Submit</button>
      </div>

    </form>
  )
}
