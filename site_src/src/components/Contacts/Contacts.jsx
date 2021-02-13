import React, { Component } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contacts extends Component {
    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="mt-0">Contacts</h2>
                            <hr className="divider my-4" />
                            {/* <p className="text-muted mb-5">Ready to start your next project with us? Give us a call
                                    or send us an email and we will get back to you as soon as possible!</p> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="ml-auto text-center">
                            <div>
                                <a href="https://fb.me/didexorg">
                                    <i className="fab fa-facebook fa-3x text-muted"></i>
                                </a>
                            </div>
                        </div>
                        {/* <div className="ml-auto text-center">
                            <div>
                                <a href="https://twitter.com/didexorg">
                                    <i className="fab fa-twitter fa-3x text-muted"></i>
                                </a>
                            </div>
                        </div> */}
                        <div className="ml-auto text-center">
                            <div><a href="https://github.com/didexorg">
                                <i className="fab fa-github fa-3x mb-3 text-muted"></i>
                            </a></div>
                        </div>
                        <div className="ml-auto text-center">
                            <div><a href="https://medium.com/@didex">
                                <i className="fab fa-medium fa-3x mb-3 text-muted"></i>
                            </a></div>
                        </div>
                        {/* <div className="ml-auto text-center">
                            <div><a href="#">
                                <i className="fab fa-reddit fa-3x mb-3 text-muted"></i>
                            </a></div>
                        </div> */}
                        {/* <div className="ml-auto text-center">
                            <div><a href="#">
                                <i className="fab fa-linkedin fa-3x mb-3 text-muted"></i>
                            </a></div>
                        </div> */}
                        <div className="ml-auto text-center">
                            <div><a href="https://t.me/DidexRu">
                                <i className="fab fa-telegram fa-3x mb-3 text-muted"></i>
                            </a></div>
                        </div>

                        {/* 
                        <div className="col-lg-4 mr-auto text-center">
                            <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                            <a className="d-block" href="mailto:didexorg@protonmail.ch">+7 </a>
                        </div>

                        <div className="col-lg-4 mr-auto text-center">
                            <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                            <a className="d-block" href="mailto:didexorg@protonmail.ch">didexorg@protonmail.ch</a>
                        </div> 
                        */}

                    </div>
                </div>
            </section>
        )
    }
}

export default Contacts;
