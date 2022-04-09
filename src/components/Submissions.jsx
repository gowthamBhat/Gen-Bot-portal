import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
import { toast } from 'react-toastify'
function Submissions() {
  const [submission, setSubmission] = useState([])
  useEffect(() => {
    getSubmissions()
  }, [])
  const getSubmissions = async () => {
    const { data } = await axios.get('http://localhost:8000/submissions')
    console.log(data)

    setSubmission(data)
  }
  // reject

  const acceptDocs = async (email, firstname) => {
    try {
      toast.success('accepted')
      const filterd = submission.filter((x) => x.email !== email)
      setSubmission(filterd)
      const { data } = await axios.post('http://localhost:8000/accepted', {
        email: email,
        firstname: firstname
      })
      console.log('accepted docs', data)
    } catch (error) {
      toast.warn('someting went wrong while accepting the docs')
      console.log(error)
    }
  }
  const declineDocs = async (email, firstname) => {
    try {
      toast.success('declined')
      const filterd = submission.filter((x) => x.email !== email)
      setSubmission(filterd)

      const { data } = await axios.post(
        'http://localhost:8000/accepted/reject',
        {
          email: email,
          firstname: firstname
        }
      )
      console.log('declined', data)
    } catch (error) {
      toast.warn('someting went wrong while accepting the docs')
      console.log(error)
    }
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
          <div className="card-body text-dark">
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
              {x.docs.map((x, idx) => (
                <a
                  className="docs-submitted-list"
                  key={idx}
                  href={'http://localhost:8000/uploads/' + x}
                >
                  {idx + 1}
                </a>
              ))}
              <div className="submission-card-buttons">
                <button
                  className="btn btn-success"
                  onClick={() => acceptDocs(x.email, x.firstname)}
                >
                  Accept
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => declineDocs(x.email, x.firstname)}
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Submissions
