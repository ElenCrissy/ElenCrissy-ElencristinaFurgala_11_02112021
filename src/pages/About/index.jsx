import {Component} from "react";
import '../../style/layout/Home.scss';
import Banner from "../../components/Banner";
import { about } from "../../kasa_about";
import DetailBlock from "../../components/DetailBlock";

class About extends Component{
    render() {
        return (
            <Banner />
    )
    }
}

export default About;