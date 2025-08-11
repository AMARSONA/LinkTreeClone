import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-amber-800 text-white flex items-center justify-center px-4 h-16'>
        <p className='text-center font-bold'>Copyright &copy; {currentYear} Amar's LinkTree - All rights reserved!</p>
    </footer>
  )
}

export default Footer