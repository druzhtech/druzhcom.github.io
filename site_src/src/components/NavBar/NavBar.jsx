import React, { Component } from 'react';
import '../App.css';
import './NavBar.css';

// TODO: lang selector, theme selector, quick contacts: telegram, didex token status, profile

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div className="container">
                    {/* <p className="navbar-brand js-scroll-trigger russian" href="#p">Дружининъ <small>исследования и разработка</small></p> */}
                    <p className="russian navbar-brand-russian js-scroll-trigger" href="#p">дружининъ
                    {/* <small>исследования и разработка</small> */}
                    </p>

                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="https://github.com/didexorg">Github</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#token">Token</a>
                            </li>
  
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;
