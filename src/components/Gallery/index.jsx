import {Component} from "react";
import '../../style/components/gallery.scss';
import previous from '../../assets/previous.png';
import next from '../../assets/next.png';

class Gallery extends Component{

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

    previous = (pictures) => {

    }

    next = (pictures) => {

    }


    render(){
        const picturesArray = this.props.pictures
        const picturesDOM = this.createPicturesDOM(picturesArray)

        if(picturesDOM){
            return (
                <div className="gallery">
                    <img
                        src={previous}
                        alt=""
                        className={"nav-previous"}
                        onClick={(e) => {this.previous(picturesDOM)}}
                    />
                    <ul>
                        {picturesDOM}
                    </ul>
                    <img
                        src={next}
                        alt=""
                        className={"nav-next"}
                        onClick={(e) => {this.next(picturesDOM)}}
                    />
                </div>
            )
        } else {
            return null
        }
    }
}

export default Gallery;