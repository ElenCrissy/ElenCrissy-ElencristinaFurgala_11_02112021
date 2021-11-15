import {Component} from "react";

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
                    {pictures.map((picture, index) => (
                        <img
                            src={picture}
                            alt="picture"
                            key={`${picture.id}-${index}`}
                        />
                    ))
                    }
                </ul>
            </div>
        )
    }
}

export default Gallery;