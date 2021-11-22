import {Component} from "react";
import '../../style/components/gallery.scss';
import previous from '../../assets/previous.png';
import next from '../../assets/next.png';

class Gallery extends Component{
    constructor(props) {
        super(props);
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


    // previous = (length) => {
    //     if(this.currentImage === length-1) {
    //         this.currentImage =- 1
    //     }
    // }
    //
    // next = (length) => {
    //     if(this.currentImage === length-1) {
    //         this.currentImage =+ 1
    //     }
    // }

    render(){
        // const picturesData = this.props.pictures
        // const picturesArray = Array.from(picturesData)
        console.log(this.props.pictures)
        return null
        // const length = picturesArray.length
        // if(picturesData){
        //     return (
        //         <div className="gallery">
        //             <div className="images">
        //                 {
        //                     picturesData.map((picture, index) => (
        //                         this.createPicturesDOM(picture, index)
        //                     ))
        //                 }
        //             </div>
        //             <img
        //                 src={previous}
        //                 alt=""
        //                 className={"nav-previous"}
        //                 onClick={(e) => {this.previous(length)}}
        //             />
        //             <img
        //                 src={next}
        //                 alt=""
        //                 className={"nav-next"}
        //                 onClick={(e) => {this.next(length)}}
        //             />
        //         </div>
        //     )
        // } else {
        //     return null
        // }
    }
}

export default Gallery;