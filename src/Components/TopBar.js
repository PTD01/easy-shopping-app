import React from 'react'
import LoginIcon from '@mui/icons-material/Login';

function TopBar() {
  return (
    <div className='top-bar container-fluid fixed-top'>
          <div className='mt-3'>
              <p>Free shipping on orders over 10k</p>
          </div>
          <div className='d-flex justify-content-between align-items-center '>
             <a href='#'>easyshopping@info.com</a>
              <a href='#'>Login <span className='text-white fw-bold'> <LoginIcon/> </span></a>
              <a href='#' className='btn btn-danger text-white' >Register  </a>
          </div>
    </div>
  )
}

export default TopBar