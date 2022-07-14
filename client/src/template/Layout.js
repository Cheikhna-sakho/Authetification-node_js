import React from 'react'
import Header from './Header'

const Layout = ({ content }) => {
  return (
    <div className='container grid-row'>
      <Header />
      <main className='grid-row'>
        {content}
      </main>
    </div>
  )
}

export default Layout