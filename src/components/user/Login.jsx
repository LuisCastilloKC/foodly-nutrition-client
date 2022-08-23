import React, { useState } from "react";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  console.log(userLogin);

  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <form>
          <div>
            <label>Email</label>
            <input
              type="text"
              autoComplete="off"
              value={userLogin.email}
              onChange={(event) =>
                setUserLogin({ ...userLogin, email: event.target.value })
              }
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              autoComplete="off"
              value={userLogin.password}
              onChange={(event) =>
                setUserLogin({ ...userLogin, password: event.target.value })
              }
            />
          </div>
          <div>
            <button type="password">Login</button>
            <a href="/"> Don't have an account? Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
