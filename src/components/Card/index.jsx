import {Component} from "react";
import '../../style/components/Card.scss';
import { Link } from 'react-router-dom';

class Card extends Component{
    render() {
        return(
            <Link to={this.props.id} className="card" id={this.props.id}>
                <img src={this.props.cover} className="card__img linear-gradient" alt="card-img"/>
                <p>{this.props.title}</p>
            </Link>
        )
    }
}

export default Card;