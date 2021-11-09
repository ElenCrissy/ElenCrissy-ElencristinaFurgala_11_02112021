import {Component} from "react";
import '../../style/components/Card.scss';

class Card extends Component{
    render() {
        console.log(this.props.title)
        return(
            <li className="card">
                <img src={this.props.picture} className="card__img linear-gradient" alt="card-img"/>
                <p>{this.props.title}</p>
            </li>

        )
    }
}

export default Card;