import React from 'react'
import './Add.css'

const Add = () => {
  return (
   <div className="item">
    <div className="add">
    <h2 className="add1">Tour Name</h2>
    
    
    <h2 className="add1">Tour Price</h2>
    <h2 className="add1">Tour Description</h2>
    <br/>
    </div>
    <br/>
    <hr />
    <div className="data">
      <input type="text"  placeholder='Name' className='inp'/>
      <input type="number" placeholder='Price' className='inp' />
    <input type="text" placeholder='Description' className='inp' />
    </div>
    
   </div>
  )
}

export default Add