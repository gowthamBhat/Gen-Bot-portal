import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
function Pendings() {
  const [submission, setSubmission] = useState([])
  useEffect(() => {
    getSubmissions()
  }, [])
  const getSubmissions = async () => {
    const { data } = await axios.get('http://localhost:8000/pendings')
    console.log(data)

    setSubmission(data)
  }
  return (
    <div className="container submission-cards">
      {submission.length === 0 && <h3>No records available</h3>}
      {submission.map((x) => (
        <div
          key={x.email}
          className="card border-dark mb-3"
          style={{ maxWidth: '23rem' }}
        >
          <div className="card-header">
            <p>{x.email} </p>
          </div>
          <div className="card-body text-dark">
            <h5 className="card-title">name:{x.firstname}</h5>
            <div className="card-text">
              <p>
                last date to submit{' '}
                <Moment date={new Date(x.lastdatetosubmit)} />{' '}
              </p>
              <p>no of docs submitted: {x.docs.length}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Pendings
