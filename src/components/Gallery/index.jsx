import {Component} from "react";
import '../../style/components/gallery.scss';
import previous from '../../assets/previous.png';
import next from '../../assets/next.png';

class Gallery extends Component{
    constructor(props) {
        super(props);
        this.state =
            {
                current : 0
            }
    }


    createPicturesDOM = (picture, index) => {
        if(picture) {
            return (
                <div className={index === this.state.current ? 'active' : 'hidden'} key={index}>
                    {index === this.state.current && (<img src={picture} alt=""/>)}
                </div>
            )
        }
    }


    previous = (length) => {
        if(this.state.current === 0) {
            return this.setState({current : length-1})
        } else {
            return this.setState({current : this.state.current-1})
        }
    }

    next = (length) => {
        if(this.state.current === length-1) {
            return this.setState({current : 0})
        } else {
            return this.setState({current : this.state.current+1})
        }
    }

    render(){
        const picturesData = this.props.pictures
        if(picturesData){
            const length = picturesData.length
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
                        onClick={(event) => this.previous(length)}
                    />
                    <img
                        src={next}
                        alt=""
                        className={"nav-next"}
                        onClick={(e) => this.next(length)}
                    />
                </div>
            )
        } else {
            return null
        }
    }
}

export default Gallery;