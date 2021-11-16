import {Component} from "react";

class Tag extends Component{
    render() {
        return (
            <div className="tag">{this.props.tag}</div>
        )
    }
}

export default Tag;