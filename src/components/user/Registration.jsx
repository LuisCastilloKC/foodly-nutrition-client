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
    <div class="flex items-center justify-center pt-10">
      <div class="w-full max-w-lg">
        <div class=" flex justify-center">
          <h1 class="text-5xl">Register</h1>
        </div>
        <form  onSubmit = {handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-md font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              value = {user.firstname}
              onChange = {(event) => setUser({...user, firstname: event.target.value})}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label class="block text-gray-700 text-md font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              value = {user.lastname}
              onChange = {(event) => setUser({...user, lastname: event.target.value})}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-md font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              value = {user.email}
              onChange = {(event) => setUser({...user, email: event.target.value})}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-6">
            <label class=" block text-gray-700 text-md font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              value = {user.password}
              onChange = {(event) => setUser({...user, password: event.target.value})}
              placeholder="**************"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Register
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/"
            >
              Already have an account? Log in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
