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
                    <p className="russian navbar-brand-russian js-scroll-trigger" href="#p">дружининъ: для своего народа<small></small>
                    </p>

                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        {/* <ul className="navbar-nav ml-auto my-2 my-lg-0">

                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#затеи">Затеи</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#услуги">Услуги</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#связь">Связь</a>
                            </li>
                        </ul> */}

                        {/* <ul className="navbar-nav my-2 my-lg-0 brd" style={{ marginLeft: "5%" }}>

                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#">Карта</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#">Словарь</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#">Магазин</a>
                            </li>
                        </ul> */}

                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;
