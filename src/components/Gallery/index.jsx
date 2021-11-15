import {Component} from "react";
import Card from "../Card";

class Gallery extends Component{
    constructor(props) {
        super(props);

    }

    render(){
        const pictures = this.props.pictures
        console.log(pictures)
        return (
            <div className="gallery">
                <ul>
                    {/*{pictures.map((picture, index) => (*/}
                    {/*    <img src={picture} alt="picture"/>*/}
                    {/*))*/}
                    {/*}*/}
                </ul>
            </div>
        )
    }
}

export default Gallery;