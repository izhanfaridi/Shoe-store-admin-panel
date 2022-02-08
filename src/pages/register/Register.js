import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  register } from "../../redux/apiCalls";
import { useHistory } from 'react-router-dom';
import "./Register.css";

function Register() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [email, setemail] = useState("");
  const dispatch = useDispatch();
  let isAdmin=true;
  let user;

  const handleClick = (e) => {
    e.preventDefault();
    user={username,email,password,isAdmin}
    register(dispatch, user);
    history.push("/login");
    setPassword("");
    setUsername("");
  };
  return (
    <div className="register-div">
      <h2>Register</h2>
      <h6>Please fill out the below information:</h6>
      <br />
      <input type="text" placeholder="First Name" required/>
      <input type="text" placeholder="Last Name" required/>
      <br />
      <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input type="email" placeholder="E-mail" required value={email} onChange={(e) => setemail(e.target.value)}  />
      <br />
      <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" required value={cpassword} onChange={(e) => setcPassword(e.target.value)} />
      <br />
      <br />
      <h6>
        By creating an account, you are agreeing to our <b>Privacy Policy</b>{" "}
        and <b>Terms of Use</b>
      </h6>
      <br />
      {password===cpassword ? <button onClick={handleClick}>Register</button>
      : <button disabled style={{cursor:"not-allowed"}}>Register</button>}
    </div>
  );
}

export default Register;
