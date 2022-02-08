import React, { useState } from 'react'
import { useDispatch,useSelector} from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { login } from '../../redux/apiCalls';
import "./login.css";
import LoginError from './LoginError'



function Login() {
  const history = useHistory()
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const dispatch=useDispatch()
  const {isFetching,error}=useSelector((state)=>state.user)
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    if(admin){
      login(dispatch, { username, password });
      history.push("/");
      setPassword("");
      setUsername("");
    }else{
    setPassword("");
    setUsername("");
    }
    //if(admin){alert(`Welcome ${name}`)}else{alert("please login again this is for security purpose")}
  
  };

  // const handleClick =(e)=>{
  //   e.preventDefault()
  //   login(dispatch,{username,password})

  // }

    return (
      <div className="login-info" style={{
          height:"100vh",
          display: "flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column"
          }}>
          <h2>Login</h2>
          <h6>Please enter your E-mail and Password</h6>
          <br/>
          <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Username"/>
          <br/>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
          <br/>
          <button onClick={handleClick} disabled={isFetching}>Login</button>
          {error && <LoginError></LoginError>}
          <h6>Don't have an account? <NavLink className="register-link" to="register"><b>Create One.</b></NavLink></h6>
      </div>
    );
  }
  
  export default Login;
