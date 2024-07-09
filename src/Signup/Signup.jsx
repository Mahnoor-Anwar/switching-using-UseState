import React from "react";
import style from './Signup.module.css'

const Signup = ({switchToLogin}) => {
  return (
    <>
      <div className={style.content}>
        <div className="text">Sign upForm</div>
        <form action="#">
        <div className={style.field}>
            <input type="text" required="" placeholder="Full name"/>
            <span className="fas fa-user" />
            <label>Full NME</label>
          </div>
          <div className={style.field}>
            <input type="text" required="" placeholder="Email"/>
            <span className="fas fa-envelope" />
            <label>Email</label>
          </div>
          <div className={style.field}>
            <input type="password" required="" placeholder="Password"/>
            <span className="fas fa-lock" />
            <label>Password</label>
          </div>
          <div className={style.field}>
            <input type="text" required="" placeholder="Phone Number"/>
            <span className="fas fa-phone" />
            <label>Phone Number</label>
          </div>
          <button>Sign Up</button>
          <div className="sign-up">
            Already Have an Account ?
            {/* <button onClick={switchToLogin}>
            login
            </button> */}
            <a href="#" onClick={switchToLogin}>login</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
