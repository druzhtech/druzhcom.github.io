import React, { Component } from 'react';
import '../App.css';

class Services extends Component {
    render() {
        return (
            <section className="page-section" id="services">
            <div className="container">
                <h2 className="text-center mt-0">At Your Service</h2>
                <hr className="divider my-4"/>
                <div className="row">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                            <h3 className="h4 mb-2">Dapp</h3>
                            <p className="text-muted mb-0">We make Dapps</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                            <h3 className="h4 mb-2">Bots</h3>
                            <p className="text-muted mb-0">We make bots</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                            <h3 className="h4 mb-2">Audit</h3>
                            <p className="text-muted mb-0">We make audit smart contratcs</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                            <h3 className="h4 mb-2">Smart Contracts</h3>
                            <p className="text-muted mb-0">We make pure Smart Contracts</p>
                        </div>
                    </div>
                </div>
                <hr className="divider my-4"/>
                <div className="row">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                            <h3 className="h4 mb-2">AirDrops</h3>
                            <p className="text-muted mb-0"></p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                            <h3 className="h4 mb-2">Prototypes</h3>
                            <p className="text-muted mb-0"></p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                            <h3 className="h4 mb-2">Marketing</h3>
                            <p className="text-muted mb-0">We make audit smart contratcs</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                            <h3 className="h4 mb-2"></h3>
                            <p className="text-muted mb-0"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Services;
