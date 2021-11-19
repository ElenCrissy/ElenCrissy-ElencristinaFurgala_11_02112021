import {Component} from "react";
import {withRouter} from 'react-router-dom';
import Gallery from "../../components/Gallery";
import Tag from "../../components/Tag"
// import DetailBlock from "../../components/DetailBlock";
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

    render() {
        const { accommodations } = this.state;
        const tags = this.getTags(accommodations.tags, accommodations)

        return (
            <section className="accommodation">
                <Gallery pictures={accommodations.pictures}/>
                <h1 className="title">{accommodations.title}</h1>
                <div className="location">{accommodations.location}</div>
                {/*{host.name ? <div className="owner">{host.name}</div> : null}*/}
                <div className="tag-list">{tags}</div>
                <div className="rating">{accommodations.rating}</div>
                {/*<DetailBlock*/}
                {/*    description={accommodations.description}*/}
                {/*    equipments={accommodations.equipments}*/}
                {/*/>*/}
            </section>
        )

    }
}

export default withRouter(Accommodation);
