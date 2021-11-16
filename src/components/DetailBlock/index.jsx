import {Component} from "react";
import "../../style/components/DetailBlock.scss";

class DetailBlock extends Component{
    constructor(props) {
        super(props);
    }

    // firstLetterToUpperCase = (string) => {
    //     string = string[0].toUpperCase() + string.slice(1);
    //     return string
    // }

    render() {
        console.log(this.props.blockName)
        // const blockNameUpperCased = this.firstLetterToUpperCase(this.props.blockName)
        return(
            <section className="detail-block">
                <div className="block-name">{this.props.blockName}</div>
                <div className="block-string">{this.props.blockString}</div>
            </section>
        )
    }
}

export default DetailBlock;