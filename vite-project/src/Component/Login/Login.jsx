import React from "react";
import {useNavigate} from 'react-router-dom'

import './Login.css'


export default function Login(){
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const date = new Date();
    const dateYear = date.getFullYear();
    const navigate = useNavigate()


    const header = {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        'mode': 'cors',
        body: JSON.stringify({ 
            email: email,
            password: password
        }),
        credentials: 'include'
    }

    const handleSubmit = (event) => {
        event.preventDefault();//this method is called to prevent the default nature of the form element
        if (!email || !password) {
          alert("Email and password must be filled out.");
          return;
        }
        fetch('http://localhost:4000/login', header)
        .then(res => res.json())
        .then(data => {
            if(data === 'Success'){
                
                navigate('/frontend')
            }
        })
        .catch(err => alert('Validation Error'))

    }

    const redirectPage = () => navigate("/register")
    return(
        <>
            <article className= "shadow-5 br3" >
                <main className="pa4 white-50">
                <form className="measure center" onSubmit={handleSubmit} >
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    {/* <legend className="f2 fw6 ph0 mh0 ttu">Sign In</legend> */}
                    <div className="mt3">
                        <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                        <input
                        className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100"
                        type="email"
                        name="email-address"
                        id="email-address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                        <input
                        className="b pa2 input-reset ba bg-white hover-bg-black hover-white w-100"
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </div>
                    <label className="pa0 ma0 lh-copy f6 pointer">
                        <input type="checkbox" /> Remember me
                    </label>
                    </fieldset>
                    <div className="auth lh-copy mt3">
                        <button
                            className="b ph3 pv2  ba b--white bg-transparent grow pointer f5 dib white-50"
                            type="submit"
                            value="Login">Login

                        </button>
                         <button
                            className="b ph3 pv2  ba b--white bg-transparent grow pointer f5 dib white-50"
                            type="submit"
                            value="Register"
                            onClick={redirectPage}>Create Account
                            
                        </button>
                    </div>
                </form>
                </main>
            </article>
            {/* <hr className="footer-line"/> */}
            {/* <footer className="login-footer">OpenEdu <em>{dateYear}</em></footer> */}
        </>
    );
    
}