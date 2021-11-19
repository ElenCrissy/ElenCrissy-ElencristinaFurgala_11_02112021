import {Component} from "react";
import '../../style/components/gallery.scss';
import previous from '../../assets/previous.png';
import next from '../../assets/next.png';
import {createRef} from "react";

class Gallery extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isCurrentMedia : true
        }
        // this.something = createRef()
    }


    createPicturesDOM = (pictures) => {
        let list
        if(pictures) {
            list = pictures.map((picture, index) => (
                <img
                    src={picture}
                    alt=""
                    key={`${index}`}
                    className={this.state.isCurrentMedia ? "active" : "hidden"}
                    // ref={this.something}
                />
            ));
            console.log(list)
            return list
        }
    }

    // createPictureDOM = (source) => {
    //     if(source) {
    //         return(
    //             <img
    //                 src={source}
    //                 alt=""
    //             />
    //         )
    //     }
    // }


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
        const picturesArray = this.props.pictures
        const picturesDOM = this.createPicturesDOM(picturesArray)


        if(picturesArray){
            // const truc = picturesArray.forEach(picture => {
            //     const pictureDOM = this.createPictureDOM(picture)
            // })

            return (
                <div className="gallery">
                    <img
                        src={previous}
                        alt=""
                        className={"nav-previous"}
                        // onClick={(e) => {this.previous(picturesArray, currentMedia)}}
                    />
                    <div className="images">
                        {picturesDOM}
                    </div>
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