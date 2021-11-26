import {Component} from "react";
import {withRouter} from 'react-router-dom';
import Gallery from "../../components/Gallery";
import Tag from "../../components/Tag";
import star from "../../assets/star.png";
import greyStar from "../../assets/emptystar.png";
import DetailBlock from "../../components/DetailBlock";
import "../../style/layout/accommodation.scss";

class Accommodation extends Component{
    constructor(props) {
        super(props)
        this.state = {
            accommodations : [],
        }
    }

    fetchData(id) {
        const url = '/data.json'
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const accommodationFromId = this.getAccommodationFromId(id, data)
                this.setState({ accommodations : accommodationFromId })
            })
            .catch(error => {
                console.log(`Fetch problem: ${error}`)
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
        const { accommodations } = this.state;
        if(this.state){
            const tags = this.getTags(accommodations.tags, accommodations)
            const host = accommodations.host
            const rating = accommodations.rating

            return (
                <section className="accommodation">
                    <Gallery pictures={accommodations.pictures}/>
                    <div className="info-accommodation">
                        <div className="info-details">
                            <div className="info">
                                <h1 className="info__title">{accommodations.title}</h1>
                                <div className="info__location">{accommodations.location}</div>
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
                        {accommodations.description ?
                            (<DetailBlock
                                class="accommodation-block"
                                blockName="description"
                                blockContent={accommodations.description}
                            />)
                            : null}
                        {accommodations.equipments ?
                            (<DetailBlock
                                class="accommodation-block"
                                blockName="equipements"
                                blockContent={accommodations.equipments}
                            />)
                            : null}
                    </div>
                </section>
            )
        } else {
            return null
        }


    }
}

export default withRouter(Accommodation);
