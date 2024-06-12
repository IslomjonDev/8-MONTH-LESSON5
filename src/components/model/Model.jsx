import React from 'react'
import './Model.scss'
const Model = ({children , close}) => {
  return (
    <>
      <div onClick={()=> close(false)} className="overlay"></div>
      <div className="modul">
         {children}
         <button className='close' onClick={() => close(false)}>Close</button>
      </div>
    </>
  )
}

export default Model