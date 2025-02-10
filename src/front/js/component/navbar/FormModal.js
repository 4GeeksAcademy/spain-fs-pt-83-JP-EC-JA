import React, { useContext, useState } from "react";
import "../../../styles/modal.css";
import { Context } from "../../store/appContext";
import { string } from "prop-types";



export const VistaModal = ({ onSubmit}) => {
    const { actions, store } = useContext(Context);
    const [signUp, setSignUp] = useState(false);
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const onSubmitRegister = async (event) => {
        event.preventDefault();
        
        const response = await actions.handlerRegister({ username, name, lastname, email, password });
        
        if (response) {
            alert("Registro exitoso, ahora inicia sesión");
            onSubmit(); 
        } else {
            alert("Error al registrar usuario");
        }
    };    
    
    const onSubmitLogin = async (event) => {
        event.preventDefault();

        await actions.handlerLogin({ email: emailLogin, password: passwordLogin });
        onSubmit()
    };
    
    return (

        <>
            <div className={`modal`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content border-0 bg-transparent">
                        <div className={`container ${signUp ? 'active' : ''}`} id="container">
                            <div className={`form-container sign-up`}>
                                <form>
                                    <h1>Create Account</h1>
                                    <input name="username" type="text" placeholder="Username" value={username} onChange={(evt) => setUsername(evt.target.value)} />
                                    <input name="name" type="text" placeholder="Name" value={name} onChange={(evt) => setName(evt.target.value)} />
                                    <input name="lastname" type="text" placeholder="Lastname" value={lastname} onChange={(evt) => setLastname(evt.target.value)} />
                                    <input name="email" type="email" placeholder="Email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
                                    <input name="password" type="password" placeholder="Password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
                                    <span>or use your email for registeration</span>
                                    <div className="social-icons">
                                        <a href="#" className="icon shadow"><i className="fa-brands fa-google-plus-g"></i></a>
                                    </div>
                                    <button onClick={onSubmitRegister} type="submit" className="shadow">Sign Up</button>
                                </form>
                            </div>


                            <div className="form-container sign-in">
                                <form id="forLogin" onSubmit={onSubmitLogin} >
                                    <h1>Sign In</h1>
                                    <input name="email" type="email" placeholder="Email" value={emailLogin} onChange={(evt) => setEmailLogin(evt.target.value)}/>
                                    <input name="password" type="password" placeholder="Password" value={passwordLogin} onChange={(evt) => setPasswordLogin(evt.target.value)} />
                                    <div className="social-icons">
                                        <a href="#" className="icon shadow"><i className="fa-brands fa-google-plus-g"></i></a>
                                    </div>
                                    <button type="submit" className="shadow">Sign In</button>
                                </form>
                            </div>


                            <div className="toggle-container">
                                <div className="toggle">
                                    <div className="toggle-panel toggle-left">
                                        <h1 className="text-black">Welcome Back!</h1>
                                        <p className="text-black">Enter your personal details to use all of site features</p>
                                        <button onClick={() => setSignUp(false)} className="hidden shadow" id="login">Sign In</button>
                                    </div>
                                    <div className="toggle-panel toggle-right">
                                        <h1 className="text-black">Welcome, Friend!</h1>
                                        <p className="text-black">Enter your personal details to use all of site features</p>
                                        <button onClick={() => setSignUp(true)} className="hidden shadow" id="register">Sign Up</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}