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
            <p style={{ color: '#ff555f', fontWeight: '700' }}>{x.email} </p>
          </div>
          <div className="card-body text-dark ">
            <h5 className="card-title ">
              <span className="card-text-color">Name: </span>
              {x.firstname}
            </h5>
            <h6 className="card-title ">
              <span className="card-text-color">Designation: </span>
              {x.designation}
            </h6>
            <div className="card-text">
              <p>
                <b className="card-text-color">Last date to submit: </b>
                <Moment date={new Date(x.lastdatetosubmit)} />{' '}
              </p>
              <p>
                {' '}
                <b className="card-text-color">Num of docs submitted:</b>{' '}
                {x.docs.length}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Pendings
