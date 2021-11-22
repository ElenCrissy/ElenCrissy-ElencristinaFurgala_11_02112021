import {Component, createRef} from "react";
import "../../style/components/DetailBlock.scss";

class DetailBlock extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }


    firstLetterToUpperCase = (string) => {
        string = string[0].toUpperCase() + string.slice(1);
        return string
    }

    open() {
        this.setState({ isActive: true })
    }

    close(event) {
        if (!this.modal.contains(event.target)) {
            this.setState({ isActive: false })
        }
    }

    render() {
        let { detailStatus } = this.state
        const blockNameUpperCased = this.firstLetterToUpperCase(this.props.blockName)
        return(
            <section className="detail-block">
                <div className="block-name" onClick={ this.open }>{blockNameUpperCased}</div>
                <div className="block-string">{this.props.blockString}</div>
            </section>
        )
        console.log(this.truc)

    }
}

export default DetailBlock;