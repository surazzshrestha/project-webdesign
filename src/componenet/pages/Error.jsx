import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

function Error() {
  return (
    <>
    <Header/>
    <div className="container my-5">
        <h1 className="text-danger text-center">404 Page not found</h1>
    </div>
    <Footer/>
      
    </>
  )
}

export default Error
