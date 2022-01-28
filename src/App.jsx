import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Error from "./pages/Error";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
    return(
        <div>
            <Header/>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/accommodation/:id" component={Accommodation}/>
                    <Route path="/*" component={Error}/>
                </Switch>
            </Router>
            <Footer/>
        </div>
    )
}

export default App;