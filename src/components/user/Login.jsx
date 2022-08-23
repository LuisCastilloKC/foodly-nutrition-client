import React from "react";

const Login = () => {
  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <form>
            <div>
                <label>Email</label>
                <input type="text" autoComplete="off" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" autoComplete="off" />
            </div>
            <div>
                <button type="password">Login</button>
                <a> Don't have an account? Register</a>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
