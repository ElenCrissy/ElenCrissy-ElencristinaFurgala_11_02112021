import {Component} from "react";

class Card extends Component{

    render() {
        return(
            <div className="card">
                <img src={this.props.cover} className="card__img" alt="card-img"/>
                <p>hello</p>
            </div>

        )
    }
}

export default Card;