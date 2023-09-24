import React from 'react'
import SpineLogo from './SpineLogo.png'

function Header() {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <img src={SpineLogo} alt='Logo' />
      </div>
      <div className='d-flex justify-content-center'>
        <p className='fs-5 fw-bold'>Preoperative preparation PRC (Pack red cell) in elective lumbar spine fusion, Hatyai hospital</p>
      </div>
    </div>
  )
}

export default Header