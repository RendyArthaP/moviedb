import React, {useState } from 'react'
import ConfirmRegister from '../components/ConfirmRegister'

const Register = () => {
  const [renderForm, setRenderForm] = useState(0)
  const nextButton = () => {
    setRenderForm(renderForm + 1)
  }
  return (
    <div className="flex flex-col h-screen justify-center">
      <h1 className="text-center font-bold text-xl text-white ">
        Register here!
      </h1>
      {renderForm === 0 && (
        <section className="w-full max-w-sm p-4 mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col my-2 md:mr-4">
              <label className="text-white text-base font-semibold mb-1">
                First Name
              </label>
              <input 
                type="text" 
                className="border-black border rounded px-2 py-1 focus:outline-none md:w-40"
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="text-white text-base font-semibold mb-1">
                Last Name
              </label>
              <input 
                type="text" 
                className="border-black border rounded px-2 py-1 focus:outline-none md:w-44"
              />
            </div>
          </div>
          <div className="flex flex-col my-2">
            <label className="text-white text-base font-semibold mb-1">
              Job Description
            </label>
            <input 
              type="text" 
              className="border-black border rounded px-2 py-1 focus:outline-none"
            />
          </div>
          <div className="flex flex-col my-2">
            <label className="text-white text-base font-semibold mb-1">
              Gender
            </label>
            <select className="border-black border rounded px-2 py-1 focus:outline-none">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label className="text-white text-base font-semibold mb-1">
              Email
            </label>
            <input 
              type="email" 
              className="border-black border rounded px-2 py-1 focus:outline-none"
            />
          </div>
          <div className="flex flex-row justify-between">
            <div></div>
            <button 
              className="bg-orange text-white w-full md:w-16 rounded p-1 my-2"
              onClick={nextButton}
            >
              Next
            </button>
          </div>
        </section>
      )}
      {renderForm === 1 && (
        <section className="w-full max-w-sm p-4 mx-auto">
          <div>
            <label>
              Have a laptop / pc
            </label>
            <div>
              <input type="radio"/>
              <label>Yes</label>
            </div>
            <div>
              <input type="radio"/>
              <label>No</label>
            </div>
          </div>
          <div>
            <label>
              Address
            </label>
            <textarea />
          </div>
          <div>
            <label>
              Mobile Number
            </label>
            <input type="number"/>
          </div>
        </section>
      )}
      {renderForm === 2 && (
        <ConfirmRegister />
      )}
    </div>
  )
}

export default Register
