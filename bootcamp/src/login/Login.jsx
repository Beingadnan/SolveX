import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import styles from './Login.module.css';
import { useNavigate,useLocation } from 'react-router-dom';
import { useState } from 'react'

export default function Login() {

  const[user,setUser]=useState('');
  const[password,setPassword]=useState('');
  const navigate=useNavigate();
  const location=useLocation();
  const queryData=new URLSearchParams(location.search)
  console.log(queryData.get('age'))

  function handleSumbit(e){
    e.preventDefault();
    localStorage.setItem('username',user)
    localStorage.setItem('password',password)
    navigate('/')
  }
  function handleChange(e){
    let id=e.target.id;
    if(id==='user'){
        setUser(e.target.value);
    }
    else{
        setPassword(e.target.value);
    }
}

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1 className={styles.loginHeading}>Login to Your Account</h1>
        <p className={styles.loginPara}>Login Using Social Networks</p>
        <div className={styles.socialIcons}>
          <GoogleIcon />
          <FacebookIcon />
          <AppleIcon/>

        </div>
        <p>------------------------------or------------------------------</p>
        <div className={styles.loginform}>
          <form onSubmit={handleSumbit}>
            <input type='email' id='user' placeholder='Email' onChange={handleChange} />
            <br/><br/>
            <input type='password' id='pass'   placeholder='Password' onChange={handleChange} /><br/><br/>
          {/* <Button variant="contained" className={styles.btn}>Sign In</Button> */}
          <button className={styles.btn} >Sign In</button>
          </form>
        </div>
      </div>


     <div className={styles.signup}>
        <h1 className={styles.headingSignUp}>New Here</h1>
      <p className={styles.contentSignup}>  Sign up and discover a great amount of new opportunities!</p>
       {/* <Button   className={styles.btn1}>Sign Up</Button> */}
       <button className={styles.btn1} >SignUp</button>

       {/* <SignUp /> */}
      </div>
     </div>

  );
}

