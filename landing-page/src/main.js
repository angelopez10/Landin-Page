import React from 'react';
import Cards from './cards';
import Footer from './footer.js';
import Jumbotron from './jumbotron.js';
import Navbar from './navbar.js';


export default function Main() {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <Cards />
            <Footer />
        </div>
    );
}
