import React from 'react'

function Icons(props) {
  return (
    <div className='pages'>
      <button>{props.name}  <figure>{props.icon}</figure></button>
    </div>
  )
}

export default Icons
