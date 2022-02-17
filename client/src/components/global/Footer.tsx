import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="text-center bg-light py-4">
      <h6>Welcome my Blog</h6>
      <Link to={`/`}
      target="_blank" rel="noreferrer"
      className="mb-2 d-block">
         https://demo-blog-tvk.herokuapp.com/
      </Link>
      <p> Copyright &copy; 2022</p>
    </div>
  )
}

export default Footer
