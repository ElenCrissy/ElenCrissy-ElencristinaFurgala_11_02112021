import logo from '../../assets/logo.svg';
import {Component} from "react";
import '../../style/components/Header.scss'

class Header extends Component {
    render() {
        return(
            <div className="header-container">
                <header className="header">
                    <img src={logo} className="header-logo" alt="logo" />
                    <div className="header-nav">
                        <a className="nav__link_accueil" href="">Accueil</a>
                        <a className="nav__link_apropos" href="">A propos</a>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;