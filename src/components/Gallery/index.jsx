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
        }
        this.currentImage = createRef()
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


    // previous = (pictures) => {
    //
    // }
    //
    // next = (pictures) => {
    //
    // }

    // componentDidMount() {
    //     const picturesArray = this.props.pictures
    //     this.setState({currentMedia : picturesArray[0]})
    //     const currentMedia = this.state.currentMedia
    //
    //     console.log(this.state.currentMedia)
    // }

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
                        // onClick={(e) => {this.previous(picturesArray, currentMedia)}}
                    />
                    <img
                        src={next}
                        alt=""
                        className={"nav-next"}
                        // onClick={(e) => {this.next(picturesArray, currentMedia)}}
                    />
                </div>
            )
        } else {
            return null
        }
    }
}

export default Gallery;