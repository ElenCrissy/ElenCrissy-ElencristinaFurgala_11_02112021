import {Component} from "react";
import {withRouter} from 'react-router-dom';
import '../../style/components/Banner.scss';
import { about } from "../../kasa_about";
import DetailBlock from "../../components/DetailBlock";
import mountains from "../../assets/moutains.png";
import "../../style/layout/about.scss";

class About extends Component{
    generateDetailBlocks = (values) => {
        // for(let key in values) {
        //     if(values.hasOwnProperty(key))
        //         return (
        //             <DetailBlock blockName={key} blockString={values[key]}/>
        //         )
        // }
    }

    render() {
        return (
            <section className="about">
                <div className="banner">
                    <img src={mountains} className="banner__img" alt="banner_img_moutains" />
                </div>
                <div className="details">{
                    Object.keys(about).map((key, index) => (
                        <DetailBlock
                            blockName={key}
                            blockString={about[key]}
                            key={`${index}`}
                        />
                    ))
                }</div>
            </section>

    )
    }
}

export default withRouter(About);