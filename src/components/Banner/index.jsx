import {Component} from "react";
import '../../style/components/Banner.scss';
import coast from '../../assets/coast.png';

class Banner extends Component {
    render() {
        return(
            <div className="banner">
                <img src={coast} className="banner__img" alt="banner_img_coast" />
                <div className="banner__slogan">
                    <p className="slogan">Chez vous, partout et ailleurs</p>
                </div>
            </div>
        )
    }
}

export default Banner;