import logo from '../../assets/logo.svg';
import {Component} from "react";
import '../../style/components/Header.scss';
// import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <div className="header-container">
                <header className="header">
                    <img src={logo} className="header-logo" alt="logo" />
                    <nav className="header-nav">
                        {window.location.pathname === "/" ?
                            // <Link to="/" className="nav__link_accueil" style={{textDecoration: "underline"}}>Accueil</Link> :
                            // <Link to="/" className="nav__link_accueil">Accueil</Link>
                            <a href="/" className="nav__link_accueil" style={{textDecoration: "underline"}}>Accueil</a> :
                            <a href="/" className="nav__link_accueil">Accueil</a>
                        }
                        {window.location.pathname === "/about" ?
                            // <Link to="/about" className="nav__link_apropos" style={{textDecoration: "underline"}}>A propos</Link> :
                            // <Link to="/about" className="nav__link_apropos">A propos</Link>
                            <a href="/about" className="nav__link_apropos" style={{textDecoration: "underline"}}>A propos</a> :
                            <a href="/about" className="nav__link_apropos">A propos</a>
                        }
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;