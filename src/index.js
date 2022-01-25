import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Error from "./pages/Error";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {withRouter} from "react-router-dom";


const HeaderWithRouter = withRouter(Header);

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <HeaderWithRouter/>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/accommodation/:id" component={Accommodation}/>
              <Route path="/*" component={Error}/>
          </Switch>
          <Footer/>
      </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

const root = document.getElementById('root');
root.classList.add('root')

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
