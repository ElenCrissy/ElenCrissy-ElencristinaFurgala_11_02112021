import logo from '../../assets/logo.svg';
import {Component} from "react";
import '../../style/components/Header.scss';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return(
            <div className="header-container">
                <header className="header">
                    <img src={logo} className="header-logo" alt="logo" />
                    <nav className="header-nav">
                        <Link to="/" className="nav__link_accueil">Accueil</Link>
                        <Link to="about"  className="nav__link_apropos">A propos</Link>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;