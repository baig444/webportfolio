import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
          Copyright &copy; {new Date().getFullYear()} All rights reserved
      </footer>
    </div>
  )
}

export default Footer
