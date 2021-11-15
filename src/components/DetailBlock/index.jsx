import {Component} from "react";

class DetailBlock extends Component{
    constructor(props) {
        super(props);
        this.state = {
            details : [],
        }
    }
    render() {
        const title = this.state.details.title;
        const text = this.state.details.text;

        return(
            <div>
                <div>{title}</div>
                <div>{text}</div>
            </div>
        )
    }
}

export default DetailBlock;