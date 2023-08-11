import React from "react";

import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Herosection from "./HeroSection.js";
import AppSection from "./AppSection.js";
import CardSection from "./CardSection.js";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Herosection/>  
            <CardSection/>
            <AppSection/>
            <Footer/>
        </div>
    )
}

export default App;