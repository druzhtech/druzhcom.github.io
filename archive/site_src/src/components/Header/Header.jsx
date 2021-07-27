import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../App.css';
import Footer from '../Footer/Footer';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h1 className="text-white russian-h1-2">Экосистема</h1>
                            <h2 className="text-white russian-h2-2">для своих</h2>

                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            {/* <hr className="divider my-4" />
                            <p className="text-white-75 font-weight-light mb-5">didexorg@protonmail.ch</p>
                            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                            <p className="text-white-75 font-weight-light mb-5">
                                <a href="https://github.com/didexorg"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                            </p> */}
                        </div>

                    </div>

                </div>

            </header>
        )
    }
}

export default Header;
