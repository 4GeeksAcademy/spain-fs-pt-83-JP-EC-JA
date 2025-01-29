import React, { useState } from "react";
import "../../../styles/modal.css";



export const VistaModal = () => {

    const [signUp, setSignUp] = useState()

    return (

        <>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content border-0 bg-transparent">
                        <div className={`container ${signUp ? 'active' : ''}`} id="container">
                            <div className={`form-container sign-up`}>
                                <form>
                                    <h1>Create Account</h1>
                                    <div className="social-icons">
                                        <a href="#" className="icon shadow"><i className="fa-brands fa-google-plus-g"></i></a>
                                    </div>
                                    <span>or use your email for registeration</span>
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <button className="shadow">Sign Up</button>
                                </form>
                            </div>
                            <div className="form-container sign-in">
                                <form>
                                    <h1>Sign In</h1>    
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <div className="social-icons">
                                        <a href="#" className="icon shadow"><i className="fa-brands fa-google-plus-g"></i></a>
                                    </div>
                                    <a href="#">Forget Your Password?</a>
                                    <button className="shadow">Sign In</button>
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