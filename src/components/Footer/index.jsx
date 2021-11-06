import {Component} from "react";
import logo from "../../assets/logo_white.svg";
import '../../style/components/Footer.scss';

class Footer extends Component {
    render() {
        return(
            <div className="footer-container">
                <footer className="footer">
                    <img src={logo} className="footer__logo" alt="logo" />
                    <p className="footer__text">© 2020 Kasa. All rights reserved</p>
                </footer>
            </div>
        )
    }
}

export default Footer;