import {Component} from "react";
import '../../style/components/gallery.scss';
import previous from '../../assets/previous.png';
import next from '../../assets/next.png';

class Gallery extends Component{
    constructor(props) {
        super(props);
        // this.state = {
        //     currentPicture :
        // }
    }

    createPicturesDOM = (pictures) => {
        let list
        if(pictures) {
            list = pictures.map((picture, index) => (
                <img
                    src={picture}
                    alt=""
                    key={`${index}`}
                />
            ));
            // list[0].classList.add("active")
            // console.log(list[0])
            return list
        }
    }

    // previous = (pictures) => {
    //
    // }
    //
    // next = (pictures) => {
    //
    // }


    render(){
        const pictures = this.props.pictures
        const list = this.createPicturesDOM(pictures)
        // console.log(this.state.currentPicture)


        return (
            <div className="gallery">
                <img
                    src={previous}
                    alt=""
                    className={"nav-previous"}
                    onClick={(e) => {this.previous(pictures)}}
                />
                <ul>
                    {list}
                </ul>
                <img
                    src={next}
                    alt=""
                    className={"nav-next"}
                    onClick={(e) => {this.next(pictures)}}
                />
            </div>
        )
    }
}

export default Gallery;