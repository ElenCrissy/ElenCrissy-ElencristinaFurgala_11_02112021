import {Component} from "react";
import '../../style/components/Card.scss';
import { Link } from 'react-router-dom';

class Card extends Component{
    render() {
        return(
            <Link to={`/accommodation/${this.props.id}`} className="card" id={this.props.id}>
                <img src={this.props.cover} className="card__img" alt="card-img"/>
                <div className="linear-gradient"></div>
                <p>{this.props.title}</p>
            </Link>
        )
    }
}

export default Card;