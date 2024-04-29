import React, { useContext, useEffect } from "react";
import style from "./SignUp.module.css";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const {
    setIsRegister,
    setUsername,
    setEmail,
    setPassword,
    setCPassword,
    username,
    password,
    email,
    cpassword,
    setLoginDisable,
  } = useContext(Context);

  // getting the value of input fields and storing in the state
  function handleChange(e) {
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
    else if (id === "cpassword") {
      setCPassword(value);
    }
  }

  // handling the submit button and storing the data in local storage and navigating to login page if registration is successfull
  function handleClick(){
    if(username && email && password && cpassword){
      if(password === cpassword){
        localStorage.setItem('userData', JSON.stringify({ username, email, password }));
        console.log("Success");
        setIsRegister(true);
        setLoginDisable(false)
        setCPassword(''); 
        setEmail('');
        setPassword('');
        setUsername('');
        alert("Registration Successfull");
        navigate("/login");
      }else{
        alert("Password and Confirm Password should be same");
      }
    }else{
      alert("All fields are required");
    }
  }
   
  // checking if the user is already register or not if and data found in local storage with the key name of userData ther enabling the login button click else disabling the login button
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    setLoginDisable(!userData);
  }, []);

  return (
    <div className={style.formContainer}>
      <div className={style.formBox}>
        <div className={style.imgPart}></div>
        <div className={style.inputContainer}>
          <h1 style={{ margin: "30px 0" }}>Register Now</h1>
          <div className={style.inputFilds}>
            <input
            value={username}
              type="text"
              placeholder="User Name"
              onChange={handleChange}
              id="username"
            />
          </div>
          <div className={style.inputFilds}>
            <input
            value={email}
              id="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className={style.inputFilds}>
            <input
            value={password}
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div className={style.inputFilds}>
            <input
            value={cpassword}
              id="cpassword"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>
          <div>
            <button className={style.btn} 
            onClick={handleClick}
            type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
