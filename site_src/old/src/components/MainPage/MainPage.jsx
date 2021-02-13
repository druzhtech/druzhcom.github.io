import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import '../App.css';
import Header from '../Header/Header';
import ShortAbout from '../ShortAbout/ShortAbout';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import TokenInfo from '../TokenInfo/TokenInfo';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';

class MainPage extends Component {
    render() {
        return (
            <div className="App">

                <NavBar />
                <Header />
                {/* <Projects /> */}
                {/* <ShortAbout /> */}
                {/* <Services />  */}
                {/* <TokenInfo /> */}
                {/* <Contacts /> */}
                {/* <Footer /> */}

            </div>
        )
    }
}

export default MainPage;
