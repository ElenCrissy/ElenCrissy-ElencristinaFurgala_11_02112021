import {Component} from "react";
import {withRouter} from 'react-router-dom';
import Gallery from "../../components/Gallery";
import Tag from "../../components/Tag";
import star from "../../assets/star.png";
import greyStar from "../../assets/emptystar.png";
import DetailBlock from "../../components/DetailBlock";
import "../../style/layout/accommodation.scss";
import Error from "../Error";

class Accommodation extends Component{
    constructor(props) {
        super(props)
        this.state = {
            accommodation : undefined,
        }
    }

    fetchData(id) {
        const url = '/data.json'
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const accommodationFromId = this.getAccommodationFromId(id, data)
                if(accommodationFromId === undefined) {
                    this.setState({accommodation : null})
                    return accommodationFromId
                }
                this.setState({ accommodation : accommodationFromId })
            })
            .catch(error => {
                console.log(`Fetch problem: ${error}`)
                this.setState({accommodation : null})
            });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.fetchData(id)
    }

    getAccommodationFromId = (id, accommodations) => {
        return accommodations.find(accommodation => {
            const accommodationId = accommodation.id;
            return accommodationId === id;
        })
    }

    getTags = (tagList, accommodation) => {
        let tagComponents
        if(tagList) {
            const tags = accommodation.tags
            tagComponents =  tags.map((tag, index) => (
                <Tag tag={tag} key={`${index}`}/>
            ))
            return tagComponents
        }
    }

    getStars = (rating) => {
        let starsArray = []
        for(let i=0; i <= rating-1; i++) {
            const redStar = (<img src={star} className="star" alt="" key={`1-${i}`}/>)
            starsArray.push(redStar)
        }
        if(rating < 5){
            const emptyStar = 5-rating;
            for(let j=0; j < emptyStar; j++) {
                const greyStarDOM = (<img src={greyStar} className="star" alt="" key={`2-${j}`}/>)
                starsArray.push(greyStarDOM)
            }
        }
        return starsArray
    }

    render() {
        const { accommodation } = this.state;
        if(accommodation === null) {
            return <Error/>
        }
        if(accommodation !== undefined && accommodation !== null){
            const tags = this.getTags(accommodation.tags, accommodation)
            const host = accommodation.host
            const rating = accommodation.rating

            return (
                <section className="accommodation">
                    <Gallery pictures={accommodation.pictures}/>
                    <div className="info-accommodation">
                        <div className="info-details">
                            <div className="info">
                                <h1 className="info__title">{accommodation.title}</h1>
                                <div className="info__location">{accommodation.location}</div>
                                <div className="info__tags">{tags}</div>
                            </div>
                            <div className="ownerAndRatings">
                                {host ?
                                    (<div className="owner">
                                        <div className="owner__name">{host.name}</div>
                                        <img className="owner__picture" src={host.picture} alt=""/>
                                    </div>)
                                    : null}
                                <div className="rating">{rating ? this.getStars(rating) : null}</div>
                            </div>
                        </div>
                    </div>
                    <div className="detail-blocks">
                        {accommodation.description ?
                            (<DetailBlock
                                class="accommodation-block"
                                blockName="description"
                                blockContent={accommodation.description}
                            />)
                            : null}
                        {accommodation.equipments ?
                            (<DetailBlock
                                class="accommodation-block"
                                blockName="equipements"
                                blockContent={accommodation.equipments}
                            />)
                            : null}
                    </div>
                </section>
            )
        }
        return null
    }
}

export default withRouter(Accommodation);
