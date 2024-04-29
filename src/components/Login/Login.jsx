import React, { useContext } from 'react'
import HeroContainer from '../HeroContainer/HeroContainer'
import style from './Login.module.css'
import { Context } from '../../context/Context';
import { useNavigate } from "react-router-dom";

function Login() {
   const {setIsLogin,setPassword,setUsername,password,username} = useContext(Context)
   const navigate = useNavigate();

   // getting the value of input fields and storing in the state
    function handleChange(e) {
        const { id, value } = e.target;
        if (id === "username") {
            setUsername(value);
        } else if (id === "password") {
            setPassword(value);
        }
    }

    // handling the submit button and checking the data in local storage and navigating to home page if login is successfull if data is matched with the local storage data. else showing the alert message.

    function handleClick(){
        if(username && password){
            const userData = JSON.parse(localStorage.getItem('userData'))
            if(userData.username === username && userData.password === password){
                setIsLogin(true)
                alert("Login Successfull")
                setUsername('')
                setPassword('')
                navigate("/");
            }else{
                alert("Invalid Username or Password")
            }
        }else{
            alert("All fields are required")
        }
    }

  return (
    <>
        <HeroContainer />
        <div className={style.formContainer}>
            <div className={style.formBox}>
                <div className={style.imgPart}></div>
                <div className={style.inputContainer}>
                    <h1 style={{margin:"30px 0"}}>Login Now</h1>
                    <div className={style.inputFilds}>
                        <input value={username} type="text"  placeholder='User Name' onChange={handleChange} id='username' />
                    </div>
                    <div className={style.inputFilds}>
                        <input value={password} type="password"  placeholder='Password' onChange={handleChange} id='password'/>
                    </div>
                    <div>
                        <button className={style.btn} type="submit" onClick={handleClick}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login