import {Component} from "react";
import '../../style/components/Banner.scss';
import coast from '../../assets/coast.png';

class Banner extends Component {
    render() {
        return(
            <div className="banner">
                <img src={coast} className="banner__img_coast" alt="banner_img_coast" />
                <p className="banner__slogan">Chez vous, partout et ailleurs</p>
            </div>
        )
    }
}

export default Banner;