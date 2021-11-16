import {Component} from "react";
import {withRouter} from 'react-router-dom';
import '../../style/components/Banner.scss';
import { about } from "../../kasa_about";
import DetailBlock from "../../components/DetailBlock";
import mountains from "../../assets/moutains.png";
import "../../style/layout/about.scss";

class About extends Component{

    generateDetailBlocks = (values) => {
        for(let value in values) {
            const key = value;
            const string = values[value]
            const detailBlock = <DetailBlock blockName={key} blockString={string}/>
            return detailBlock
        }
    }

    render() {
        return (
            <section className="about">
                <div className="banner">
                    <img src={mountains} className="banner__img" alt="banner_img_moutains" />
                </div>
                <div className="details">{this.generateDetailBlocks(about)}</div>
            </section>

    )
    }
}

export default withRouter(About);