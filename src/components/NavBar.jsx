import React from 'react'
import './NavBar.css'
// import LocalStroageContainer from './LocalStroageContainer'
import { Link } from 'react-router-dom'

function NavBar() {
  // const [currentUser, setcurrentUser] = useState(null)
  //   useEffect(() => {
  //     setcurrentUser(LocalStroageContainer.getCurrentUser())
  //   }, [])

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

        {/* <li style={{ cursor: 'pointer' }}>
          <Link className="link-tag" to="/submissions">
            submissions
          </Link>
        </li> */}

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

        {/* {currentUser && (
          <li style={{ float: 'right', cursor: 'pointer' }}>
            <span
              className="link-tag"
              onClick={() => {
                localStorage.removeItem('token')
                window.location = '/'
              }}
            >
              Logout
            </span>
          </li>
        )} */}
        {/* {currentUser && (
          <li style={{ cursor: 'pointer' }}>
            <span
              className="link-tag"
              onClick={() => {
                window.open('http://localhost:3500', '_blank')
              }}
            >
              Chat
            </span>
          </li>
        )} */}
      </ul>
    </div>
  )
}

export default NavBar
