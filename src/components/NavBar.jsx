import React from 'react'
import './NavBar.css'
import genSvg from './Genpact-Logo.wine.svg'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    // <div className="navbar-main">
    <nav class="nav-container">
      <img src={genSvg} width="200" height="200" alt="genpact logo" />
      <ul class="items-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/submissions"> Submissions</Link>
        </li>

        <li>
          <Link to="/pendings">Pendings</Link>
        </li>
        <li>
          <Link to="/accepted"> Accepted</Link>
        </li>

        <li>
          <Link to="/reminders"> Reminders</Link>
        </li>
      </ul>
    </nav>
  )
}
/* <ul>
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
      </ul> </div> */
export default NavBar
