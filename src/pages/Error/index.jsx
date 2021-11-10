import {Component} from "react";
import '../../style/layout/Error.scss';
import {Link} from "react-router-dom";

class Error extends Component{
    render() {
        return (
            <div className="error">
                <p className="error__number">404</p>
                <p className="error__message">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="error__backHome">Retourner sur la page d’accueil</Link>
            </div>
        )
    }
}

export default Error;