import React, { Component } from 'react';
import '../App.css';
import './Footer.css';

// TODO: like OnGrid

class Footer extends Component {
    render() {
        return (
            <footer
                className="bg-light py-5"
            >

                <div className="row">
                    <div className="col">
                        <div>
                            <a href="https://fb.me/didexorg">
                                <i className="fab fa-facebook fa-3x text-muted"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <a href="https://twitter.com/didexorg">
                                <i className="fab fa-twitter fa-3x text-muted"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div><a href="https://github.com/didexorg">
                            <i className="fab fa-github fa-3x mb-3 text-muted"></i>
                        </a></div>
                    </div>
                    <div className="col">
                        <div><a href="https://medium.com/@didex">
                            <i className="fab fa-medium fa-3x mb-3 text-muted"></i>
                        </a></div>
                    </div>
                    {/* <div className="col">
                        <div><a href="#">
                            <i className="fab fa-reddit fa-3x mb-3 text-muted"></i>
                        </a></div>
                    </div>
                    <div className="col">
                        <div><a href="#">
                            <i className="fab fa-linkedin fa-3x mb-3 text-muted"></i>
                        </a></div>
                    </div> */}
                    <div className="col">
                        <div><a href="https://t.me/DidexRu">
                            <i className="fab fa-telegram fa-3x mb-3 text-muted"></i>
                        </a></div>
                    </div>

                </div>

                <div className="container">
                    <div className="small text-center text-muted">Права защищены &copy; Дружининъ</div>
                    <div className="small text-center text-muted">Телефон: +7 (925) 232-55-24</div>
                </div>

            </footer>
        )
    }
}

export default Footer;
