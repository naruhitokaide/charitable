import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import About from './About';
import Donate from './Donate';
import Donate_rd from './Donate_rd';
import Donate_rd2 from './Donate_rd2';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Fundraiser from './Fundraiser';
import { Switch, Route, Redirect } from 'react-router-dom';


const App=()  => {
    return(
    <>
    <Navbar />
    <Switch>
        <Route exact path = "/" component={Home} />
        <Route exact path = "/about" component={About} />
        <Route exact path = "/donate" component={Donate} />
        <Route exact path = "/donate_rd" component={Donate_rd} />
        <Route exact path = "/donate_rd2" component={Donate_rd2} />
        <Route exact path = "/fundraiser" component={Fundraiser} />
        <Route exact path = "/contact" component={Contact} />
        <Redirect to="/"/>
    </Switch>
    <Footer />
    </>
    );
};

export default App;