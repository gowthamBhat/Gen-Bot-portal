import React from 'react'
import './NavBar.css'

import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="navbar-main">
      <ul>
        <li>
          <span className="link-tag active">Welcome Gowtham!!</span>
        </li>

        <li>
          <Link className="link-tag" to="/">
            Home
          </Link>
        </li>

        <li style={{ cursor: 'pointer' }}>
          <Link className="link-tag" to="/submissions">
            Submissions
          </Link>
        </li>
        <li style={{ cursor: 'pointer' }}>
          <Link className="link-tag" to="/pendings">
            Pendings
          </Link>
        </li>

        <li style={{ cursor: 'pointer' }}>
          <Link className="link-tag" to="/accepted">
            Accepted
          </Link>
        </li>

        <li style={{ cursor: 'pointer' }}>
          <Link to="/reminders" className="link-tag">
            Reminders
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
