import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { signUp } from "../../store/actions/authActions";

const Registration = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    console.log(state)
    const [user, setUser] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    })

    const handleSubmit = (event) => {
      event.preventDefault()
      dispatch(signUp(user))

      setUser({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      })
    }

  


  return (
    <div className="flex items-center justify-center pt-10">
      <div className="w-full max-w-lg">
        <div className=" flex justify-center">
          <h1 className="text-5xl">Register</h1>
        </div>
        <form  onSubmit = {handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              value = {user.firstname}
              onChange = {(event) => setUser({...user, firstname: event.target.value})}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-md font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              value = {user.lastname}
              onChange = {(event) => setUser({...user, lastname: event.target.value})}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              value = {user.email}
              onChange = {(event) => setUser({...user, email: event.target.value})}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className=" block text-gray-700 text-md font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              value = {user.password}
              onChange = {(event) => setUser({...user, password: event.target.value})}
              placeholder="**************"
              autoComplete="off"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Register
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/"
            >
              Already have an account? Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
