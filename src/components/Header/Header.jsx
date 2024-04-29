import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { Context } from "../../context/Context";
import { useContext, useEffect, useState } from "react";

function Header() {
  const {isLogin,loginDisable,setLoginDisable,setIsLogin} = useContext(Context)
  const [name, setName] = useState("");

  // checking if the user is already register or not if and data found in local storage with the key name of userData then enabling the login button click else disabling the login button

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    setLoginDisable(!userData);
    if(userData){
      const urName = JSON.parse(userData).username;
      setName(urName);
    }
  }, []);

  // handling the logout button click and removing the data from the local storage and disabling the login button and showing the alert message.
  
  function handleClick() {  
    localStorage.removeItem("userData");
    setIsLogin(false);
    setLoginDisable(true);
    alert("Logout Successfull");
  }
  return (
    <header style={{ marginBottom: "20px",position:"sticky",top:"0",zIndex:"99999" }}>
      <nav className={style.nav}>
        <div>
          <Link to="/">
            <img src="../images/Logo" alt="Logo" />
          </Link>
        </div>
        <div className={style.navLinks}>
          <ul>
            {
            !isLogin ?
            <>
            <li>
              <Link to="/login">
                <button className={style.btn} disabled={loginDisable} >Login</button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className={`${style.btn} ${style.secBtn}`}>Signup</button>
              </Link>
            </li>
            </> :
            
            <>
            
            <li>
              <Link to="/">
                <button onClick={handleClick} className={style.btn}>Logout</button>
              </Link>
            </li>
            <li>
              <h5>{name}</h5>
            </li>
            </>
              
            }
            
            
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
