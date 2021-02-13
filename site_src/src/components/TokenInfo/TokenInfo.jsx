import React, { Component } from 'react';
import '../App.css';

class TokenInfo extends Component {
    render() {
        return (
            <section id="token" className="page-section bg-dark text-white">
                <div className="container text-center">
                    <h2 className="mb-4">Buy our token and get fee</h2>
                    <a className="btn btn-light btn-xl" href="#">Token</a>
                </div>
            </section>
        )
    }
}

export default TokenInfo;
