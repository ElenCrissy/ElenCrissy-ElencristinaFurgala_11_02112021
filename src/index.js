import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Header/>
          <Routes path="/">
              <Route index element={<Home/>} />
              <Route path="about" element={<About/>} />
          </Routes>
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
