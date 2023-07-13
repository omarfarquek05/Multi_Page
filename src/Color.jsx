import React from 'react'
import "./color.css"
import BGimage from "./assets/nnneon.svg"

const Color = () => {
  return (
    <div style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top',
     marginRight: '200px',
     height : '250px',
     width:'250px',
        backgroundImage: `url(${BGimage })`
      }} >
    
    <h1>Color</h1>
    
    
    </div>
  );
}

export default Color