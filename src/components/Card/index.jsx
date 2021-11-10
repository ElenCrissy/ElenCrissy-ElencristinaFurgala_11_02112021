import {Component} from "react";
import '../../style/components/Card.scss';
import { Link } from 'react-router-dom';

class Card extends Component{
    render() {
        console.log(this.props.id)
        let id = this.props.id;
        return(
            <Link to={id} className="card">
                <img src={this.props.picture} className="card__img linear-gradient" alt="card-img"/>
                <p>{this.props.title}</p>
            </Link>
        )
    }
}

export default Card;