import React, { Component } from 'react';

import ReactSVG from 'react-svg'
import '../App.css';

// TODO: add ipfs

const logoNames = [
    { title: 'Bitcoin', name: 'bitcoin', type: 'brand' },
    { title: 'Elixir', name: 'elixir', type: 'technology' },
    { title: 'EOS', name: 'eos', type: 'brand' },
    { title: 'Ethereum', name: 'ethereum', type: 'brand' },
    { title: 'Exonum', name: 'exonum', type: 'brand' },
    { title: 'React', name: 'react', type: 'technology' },
    { title: 'Rust', name: 'rust', type: 'technology' },
    { title: 'Substrate', name: 'substrate', type: 'brand' },
    { title: 'TypeScript', name: 'typescript', type: 'technology' },
    { title: 'WebAssembly', name: 'webassembly', type: 'technology' },
    { title: 'Solidity', name: 'solidity', type: 'technology' },
    { title: 'Polkadot', name: 'polkadot', type: 'brand' },
    { title: 'Javascript', name: 'javascript', type: 'technology' },
    { title: 'Telegram', name: 'telegram', type: 'brand' },
    { title: 'Waves', name: 'waves', type: 'brand' },
    { title: 'Vostok', name: 'vostok', type: 'brand' },
    { title: 'HLF', name: 'hlf', type: 'brand' },
    { title: 'HL', name: 'hl', type: 'brand' },
];
class ShortAbout extends Component {

    renderSvgIcon = (logoTitle, logoName) => {
        console.log("logoName: ", logoName)
        return (
            <div>
                <div className="ml-auto text-center">
                    <ReactSVG src={"img/logos/svg/" + logoName + ".svg"} />

                    <div>
                        {logoTitle}
                    </div>
                </div>
            </div>
        )
    }

    renderPngIcon = (logoTitle, logoName) => {
        return (
            <div>
                <div className="ml-auto text-center">
                    <img src={"img/logos/png/" + logoName + ".png"} width="50" />

                    <div>
                        {logoTitle}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <section className="page-section" id="about">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-white mt-0">We've got what you need!</h2>
                            <hr className="divider light my-4" />
                            <p className="text-white-50 mb-4">
                                {/* Description about company and technologies. Like: Bitcoin, Substrate, etc */}

                                {/* <div className="row">

                                    {
                                        logoNames.map((logo) => this.renderSvgIcon(logo.title, logo.name))
                                    }

                                </div>

                                <div className="row">

                                    {
                                        logoNames.map((logo) => this.renderPngIcon(logo.title, logo.name))
                                    }

                                </div> */}
                            </p>
                            <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ShortAbout;
