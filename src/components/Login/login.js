import React, { useState, useRef } from 'react';
import './login.css';


function Login() {
    const [emaill, setEmail] = useState()
    const inputRef = useRef()
    const inputRef1 = useRef()


    const handleSubmit = () => {

        var emailValue = inputRef.current.value;
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const result = pattern.test(emailValue)

        if (result === true) {
            console.log("true");
        }
        else {
            console.log("false");
        }



    }
    const handleChange = () => {
        console.log("password");
    }

    return (
        <> <div className="container">
            <h3>LOGIN TO BIKEWALE</h3>
            <form >
                <input type="email" placeholder="Email" className="email" ref={inputRef} /><br />
                <input type="password" placeholder="password" className="pwd" onChange={handleChange} /><br />
                <a href="#">Forgot Password ?</a><br />
                <button className="btn" type="submit" onClick={handleSubmit}>Log in</button>
            </form>
            <p><span>OR</span></p>
            <h3 className="signUp">SIGN UP</h3>
        </div>


        </>
    )
}
export default Login;