import {Component} from "react";
import {withRouter} from 'react-router-dom';
import Gallery from "../../components/Gallery";
import DetailBlock from "../../components/DetailBlock";

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

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(prevState === []) {
    //         const relevantAccommodation = this.getAccommodationFromId(this.id, this.state);
    //         return this.setState({accommodations : relevantAccommodation})
    //     }
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     // const { id } = this.props.match.params;
    //     if (this.state.accommodations.length > 1) {
    //         const relevantAccommodation = this.getAccommodationFromId(this.id, this.state);
    //         return this.setState({accommodations : relevantAccommodation})
    //     }
    // }

    getAccommodationFromId = (id, accommodations) => {
        return accommodations.find(accommodation => {
            const accommodationId = accommodation.id;
            return accommodationId === id;
        })
    }

    render() {
        const { accommodations } = this.state;
        console.log(accommodations.pictures)
        return(
            <section className="accommodation">
                <Gallery pictures={accommodations.pictures}/>
                <div className="title">{accommodations.title}</div>
                <div className="location">{accommodations.location}</div>
                {/*{host.name ? <div className="owner">{host.name}</div> : null}*/}
                {/*//map for tags*/}
                <div className="rating">{accommodations.rating}</div>
                <DetailBlock
                    description={accommodations.description}
                    equipments={accommodations.equipments}
                />
            </section>
        )

    }
}

export default withRouter(Accommodation);
