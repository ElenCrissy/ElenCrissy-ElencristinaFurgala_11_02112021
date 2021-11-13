import {Component} from "react";
import { withRouter } from 'react-router-dom';
// import DetailBlock from "../../components/DetailBlock";

class Accommodation extends Component{
    constructor(props) {
        super(props)
        this.state = {
            accommodations : [],
        }
    }

    fetchData() {
        const url = '/data.json'
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ accommodations : data })
            })
            .catch(error => {
                console.log(`Fetch problem: ${error}`)
            });
    }

    componentWillMount() {
        this.fetchData()
    }

    // componentDidMount() {
    //     this.fetchData()
    //     const { id } = this.props.match.params;
    //     const { accommodations } = this.state;
    //     console.log(accommodations)
    //
    //     const relevantAccommodation = this.getAccommodationFromId(id, accommodations);
    //     // console.log(relevantAccommodation.id)
    // }

    getAccommodationFromId(id, accommodations) {
        const relevantAccommodation = accommodations.find(accommodation => {
            const accommodationId = accommodation.id;
            return accommodationId === id;
        });
        return relevantAccommodation
    }



    render() {
        const { id } = this.props.match.params;
        const { accommodations } = this.state;
        console.log(accommodations)

        const relevantAccommodation = this.getAccommodationFromId(id, accommodations);
        console.log(relevantAccommodation)


        return(
            <section className="accommodation">
                {/*<Gallery/>*/}
                {/*<div className="title">{relevantAccommodation.title}</div>*/}
                {/*<div className="location">{relevantAccommodation.location}</div>*/}
                {/*<div className="owner">{relevantAccommodation.host.name}</div>*/}
                {/*//map for tags*/}
                {/*<div className="rating">{relevantAccommodation.rating}</div>*/}
                {/*<DetailBlock/>*/}
            </section>
        )
}
}

export default withRouter(Accommodation);
