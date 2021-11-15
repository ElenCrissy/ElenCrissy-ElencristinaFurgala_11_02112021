import {Component} from "react";

class Gallery extends Component{

    render(){
        const pictures = this.props.pictures
        console.log(pictures)
        let test;
        if(pictures) {
            return (
                test = pictures.map((picture, index) => (
                    <img
                        src={picture}
                        alt=""
                        key={`${picture.value}-${index}`}
                    />
                ))
        )
        }

        return (
            <div className="gallery">
                <ul>
                    {test}
                </ul>
            </div>
        )
    }
}

export default Gallery;