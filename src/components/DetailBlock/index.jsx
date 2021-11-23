import {Component} from "react";
import "../../style/components/DetailBlock.scss";
import arrow from "../../assets/arrow.png";

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

    open = () => {
        this.setState({ isActive: true })
    }

    close = () => {
        this.setState({ isActive: false })
    }

    getEquipments = (equipments) => {
        let equipmentList = []
        equipments.map((equipment, index) => {
            const equipmentDOM = (<div className="equipment" key={index}>{equipment}</div>)
            equipmentList.push(equipmentDOM)
        })
        return equipmentList
    }

    render() {
        const blockNameUpperCased = this.firstLetterToUpperCase(this.props.blockName)
        const blockContent = this.props.blockContent

        return (
            <section className="detail-block">
                <div className="block-name" onClick={this.state.isActive ? this.close : this.open}>{blockNameUpperCased}</div>
                {this.state.isActive ?
                        <div className="block-content">
                            {Array.isArray(blockContent) ? this.getEquipments(blockContent)
                                : this.props.blockContent}</div>
                                : null }
                {this.state.isActive ?
                        <img src={arrow} alt="" className="arrow arrow--up" /> :
                        <img src={arrow} alt="" className="arrow arrow--down" />}
            </section>
        )

    }
}

export default DetailBlock;