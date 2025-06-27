import React from 'react'

function Container({ children, className = '' }) {
  return (
    <div className={`md:w-[1440px] mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container