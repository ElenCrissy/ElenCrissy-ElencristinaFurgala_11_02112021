import {Component} from "react";
import "../../style/components/Tag.scss"

class Tag extends Component{
    render() {
        return (
            <div className="tag">{this.props.tag}</div>
        )
    }
}

export default Tag;