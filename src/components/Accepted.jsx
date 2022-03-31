import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
function Submissions() {
  const [submission, setSubmission] = useState([])
  useEffect(() => {
    getSubmissions()
  }, [])
  const getSubmissions = async () => {
    const { data } = await axios.get('http://localhost:8000/accepted')
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
                date of submission: <Moment date={new Date(x.updatedAt)} />{' '}
              </p>
              <p>no of docs submitted: {x.docs.length}</p>
              {x.docs.map((x, idx) => (
                <a
                  key={idx}
                  className="docs-submitted-list"
                  href={'http://localhost:8000/uploads/' + x}
                >
                  {idx + 1}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Submissions
