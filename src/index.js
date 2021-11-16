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



ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Header/>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/:id" component={Accommodation}/>
              <Route path="*" component={Error}/>
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
