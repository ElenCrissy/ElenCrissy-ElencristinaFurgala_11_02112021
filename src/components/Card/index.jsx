import {Component} from "react";

class Card extends Component{
    render() {
        console.log(this.props.title)
        return(
            <div className="card">
                <img src={this.props.picture} className="card__img" alt="card-img"/>
                <p>{this.props.title}</p>
            </div>

        )
    }
}

export default Card;