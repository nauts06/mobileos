import React from 'react'

const File = () => {
  return (
    <div className='a'>
      <h1>Mobile Operating System</h1>
        <ul>
         <li>Android</li>
         <li>Blckberry</li>
         <li>iPhone</li>
         <li>Windows Phone</li>
        </ul>
      <h1>Mobile Manufacturers</h1>
         <ul>
            <li style={{listStyleType: "square"}}>Samsung</li>
            <li  style={{listStyleType: "square"}}>HTC</li>
            <li> Micromax</li>
            <li  style={{listStyleType: "circle"}}>Apple</li>
        </ul>
      
    </div>
  )
}

export default File