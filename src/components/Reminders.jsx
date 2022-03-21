import React, { useState, useRef } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
function Reminders() {
  const funRef = useRef(null)
  const [pplReminded, setPplReminded] = useState([])
  let nIntervId

  const sendReminder = async () => {
    toast.success('Reminder sent')
    const { data } = await axios.get('http://localhost:8000/reminder')
    setPplReminded(data)
  }

  const automaticReminder = async () => {
    toast.success('Automatic reminder on')

    funRef.current = setInterval(async () => {
      const { data } = await axios.get('http://localhost:8000/reminder')
      setPplReminded(data)
      console.log('reminder sent')
    }, 30000)
  }
  const stopReminder = async () => {
    toast.warn('Reminder stopped')
    clearInterval(funRef.current)
    // release our intervalID from the variable
    nIntervId = null
  }

  return (
    <div>
      <div className="container reminder-buttons">
        <button className="btn btn-success" onClick={sendReminder}>
          Send Reminders
        </button>
        <button className="btn btn-info" onClick={automaticReminder}>
          Make Automatic
        </button>
        <button className="btn btn-danger" onClick={stopReminder}>
          Stop Reminders
        </button>
      </div>
      <div className="reminder-ppl">
        {pplReminded.map((x) => (
          <p>
            name : {x.firstname}, email {x.email}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Reminders
