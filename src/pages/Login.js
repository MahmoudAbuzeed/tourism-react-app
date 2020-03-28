import React, { Component } from 'react';

import "./Login.css";


class Login extends Component {
  render(){
    return (
      <div>

<div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
            <form className="col-md-9">
                <div className="AppForm shadow-lg">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <div className="AppFormLeft">

                                <h1>Login</h1>
                                <div className="form-group position-relative mb-4">
                                    <input type="text" className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" id="username"
                                        placeholder="Username"/>
                                        <i className="fa fa-user-o"></i>
                                </div>
                                <div className="form-group position-relative mb-4">
                                    <input type="password" className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" id="password"
                                        placeholder="Password"/>
                                        <i className="fa fa-key"></i>

                                </div>
                          

                                <button className="btn btn-success btn-block shadow border-0 py-2 text-uppercase ">
                                    Login
                                </button>

                            </div>

                        </div>
                        <div class="col-md-6">
                            <div class="AppFormRight position-relative d-flex justify-content-center flex-column align-items-center text-center p-5 text-white">
                                <h2 class="position-relative px-4 pb-3 mb-4">Welcome</h2>
                                <p>Lorem ipsuing elit. Molomos totam est voluptatum i omos totam est voluptatum i ure sit consectetur ill</p>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    </div>
      </div>
    )
  }
}

export  {Login};