import './App.css'
import NavBar from './components/NavBar.jsx'
import Invite from './components/Invite'
import { Switch, Route } from 'react-router-dom'
import Pendings from './components/Pendings'
import Accepted from './components/Accepted'
import Submissions from './components/Submissions'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Reminders from './components/Reminders'

function App() {
  // setInterval(() => {
  //   console.log('called')
  // }, 1000)
  return (
    <div className="container">
      <ToastContainer />
      <center>
        <NavBar />
      </center>

      <Switch>
        <Route path="/pendings" component={Pendings} />
        <Route path="/submissions" component={Submissions} />
        <Route path="/accepted" component={Accepted} />
        <Route path="/reminders" component={Reminders} />
        <Route path="/" component={Invite} />
      </Switch>
      {/* <Invite /> */}
    </div>
  )
}

export default App
