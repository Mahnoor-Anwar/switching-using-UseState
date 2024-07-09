import React from "react";
import style from '../Signup/Signup.module.css'

const Login = ({switchToSignup}) => {
  return (
    <>
      <div className={style.content}>
        <div className="text">Login Form</div>
        <form action="#">
          <div className={style.field}>
            <input type="text" required="" />
            <span className="fas fa-user" />
            <label>Email or Phone</label>
          </div>
          <div className={style.field}>
            <input type="password" required="" />
            <span className="fas fa-lock" />
            <label>Password</label>
          </div>
          <button>Sign in</button>
          <div className="sign-up">
            Not a member?
            {/* <button onClick={switchToSignup}>

            signup now
            </button> */}
             <a href="#" onClick={switchToSignup}>lSign Up</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
