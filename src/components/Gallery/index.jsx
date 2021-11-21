import {Component} from "react";
import '../../style/components/gallery.scss';
import previous from '../../assets/previous.png';
import next from '../../assets/next.png';
import {createRef} from "react";

class Gallery extends Component{
    constructor(props) {
        super(props);
        this.state = {
            img : [0]
        };
        this.currentImage = [0];
        // this.currentImageDOM = createRef()
    }


    createPicturesDOM = (picture, index) => {
        if(picture) {
            return (
                <img
                    src={picture}
                    alt=""
                    key={`${index}`}
                />
            )
        }
    }


    previous = (length) => {
        if(this.currentImage === length-1) {
            this.currentImage =- 1
        }
    }

    next = (length) => {
        if(this.currentImage === length-1) {
            this.currentImage =+ 1
        }
    }

    render(){
        const picturesData = this.props.pictures
        const length = picturesData.length
        if(picturesData){
            return (
                <div className="gallery">
                    <div className="images">
                        {
                            picturesData.map((picture, index) => (
                                this.createPicturesDOM(picture, index)
                            ))
                        }
                    </div>
                    <img
                        src={previous}
                        alt=""
                        className={"nav-previous"}
                        onClick={(e) => {this.previous(length)}}
                    />
                    <img
                        src={next}
                        alt=""
                        className={"nav-next"}
                        onClick={(e) => {this.next(length)}}
                    />
                </div>
            )
        } else {
            return null
        }
    }
}

export default Gallery;