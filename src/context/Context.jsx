import { createContext, useState } from "react";

export const Context = createContext();

function ContextProvider(props) {
    const [isLogin,setIsLogin] = useState(false)
    const [isRegister, setIsRegister] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [loginDisable, setLoginDisable] = useState(true)
    const [showPopUp,setShowPopUp] = useState(false)
    const [productDetails,setProductDetails] = useState([{}])   
    const [updateDetailsPopup,setUpdateDetailsPopup] = useState(false)
    const [products, setProducts] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState("");
    const [titleFilter, setTitleFilter] = useState("");

    const contextValue = {
        isLogin,
        setIsLogin,
        isRegister,
        setIsRegister,
        username,
        setUsername,    
        email,
        setEmail,
        password,
        setPassword,
        cpassword,
        setCPassword,
        loginDisable,
        setLoginDisable,
        showPopUp,
        setShowPopUp,
        productDetails,
        setProductDetails,
        updateDetailsPopup,
        setUpdateDetailsPopup,
        products,
        setProducts,
        categoryFilter,
        setCategoryFilter,
        titleFilter,
        setTitleFilter
    }
   

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;