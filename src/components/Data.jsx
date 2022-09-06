import React from 'react'

function Data(props) {
  return (
    <div className='row text-center'>
    <h2 className='col-6' style={{padding:0}}>{props.data1}</h2>
    <h2 className='col-6' style={{padding:0}}>{props.data2}</h2>
    </div>
  )
}

export default Data