import React, { useState } from 'react'

export default function ToggleVisibility({ children }) {

    const [show, setShow] = useState();

    function toggleShow() {
        setShow(!show)
    }

    var buttonText = show ? "Hide" : "Show More";

    return (
      <div>
        {show && children}
        <button className='btn' onClick={toggleShow}>{buttonText}</button>
      </div>
    )
}

