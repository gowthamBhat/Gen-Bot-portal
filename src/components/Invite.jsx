import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

function Invite() {
  const [inviteData, setInviteData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    lastdate: '',
    requiredDocs: ''
  })
  const handleInput = (event) => {
    let replica = { ...inviteData }
    replica[event.target.name] = event.target.value
    setInviteData(replica)
  }
  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(
        'http://localhost:8000/invite',
        inviteData
      )
      console.log('res from backend', data)
      toast.success('invite sent')
      setInviteData({
        firstname: '',
        lastname: '',
        email: '',
        lastdate: '',
        requiredDocs: '',
        designation: ''
      })
    } catch (error) {
      console.log(error)
      toast.warning('invite failed')
    }
  }
  console.log('state', inviteData)

  return (
    <div>
      <div className="container " style={{ width: '70%', height: '60%' }}>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col">
            <div
              className="card my-4 shadow-3"
              style={{ marginTop: '0 !important' }}
            >
              <div className="row g-0">
                <div className="col-xl-6 d-xl-block bg-image">
                  <img
                    src="https://www.genpact.com/craft/assets/uploads/images/genpact-logo.jpg"
                    alt="genpact logo"
                    className="img-fluid"
                    style={{
                      backgroundPosition: 'center',
                      backgroundSize: 'cover'
                    }}
                  />
                  <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                  ></div>
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-4 text-uppercase invite-heading">
                      Candidate Info
                    </h3>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label className="form-label" htmlFor="form3Example1m">
                          First name
                        </label>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1m"
                            name="firstname"
                            className="form-control mb-2 mr-sm-2"
                            value={inviteData.firstname}
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label
                            className="form-label"
                            htmlFor="form3Example1n"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            id="form3Example1n"
                            name="lastname"
                            value={inviteData.lastname}
                            className="form-control mb-2 mr-sm-2"
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example2">
                        Email
                      </label>
                      <input
                        type="text"
                        id="form3Example2"
                        name="email"
                        value={inviteData.email}
                        className="form-control  mb-2 mr-sm-2"
                        onChange={handleInput}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example6">
                        Required Docs
                      </label>
                      <input
                        type="text"
                        id="form3Example6"
                        name="requiredDocs"
                        className="form-control  mb-2 mr-sm-2"
                        onChange={handleInput}
                        value={inviteData.requiredDocs}
                      />
                    </div>
                    <label className="form-label" htmlFor="form3Example10">
                      Designation
                    </label>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example10"
                        name="designation"
                        className="form-control  mb-2 mr-sm-2"
                        onChange={handleInput}
                        value={inviteData.designation}
                      />
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <label className="" htmlFor="lastdate">
                        Last date to submit
                      </label>
                      <input
                        type="date"
                        className="datepicker"
                        name="lastdate"
                        onChange={handleInput}
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <button
                        type="button"
                        className="btn btn-success btn-lg ms-2"
                        style={{ backgroundColor: '#ea5762 ' }}
                        onClick={handleSubmit}
                      >
                        Invite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invite
