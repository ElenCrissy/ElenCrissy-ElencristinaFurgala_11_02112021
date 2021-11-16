import {Component} from "react";
import '../../style/components/gallery.scss';
import previous from '../../assets/previous.png';
import next from '../../assets/next.png';

class Gallery extends Component{
    constructor(props) {
        super(props);
        if(this.props.pictures) {
            this.state = {
                currentPicture : this.props.pictures[0]
            }
        }
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
            return list
        }
    }

    createArrow

    render(){
        const pictures = this.props.pictures
        // const { currentPicture } = this.state
        const list = this.createPicturesDOM(pictures)
        console.log(list)

        return (
            <div className="gallery">
                <img src={previous} alt="" className={"nav-previous"}/>
                <ul>
                    {list}
                </ul>
                <img src={next} alt="" className={"nav-next"}/>
            </div>
        )
    }
}

export default Gallery;