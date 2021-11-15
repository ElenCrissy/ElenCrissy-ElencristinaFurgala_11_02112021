import {Component} from "react";
import { withRouter } from 'react-router-dom';
import Gallery from "../../components/Gallery";
import DetailBlock from "../../components/DetailBlock";

class Accommodation extends Component{
    constructor(props) {
        super(props)
        this.state = {
            accommodations : [],
        }
        // this.getAccommodationFromId = this.getAccommodationFromId.bind(this);
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

    componentDidMount = () => {
        this.fetchData()
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        const { id } = this.props.match.params;
        if (this.state.accommodations.length > 1) {
            const relevantAccommodation = this.getAccommodationFromId(id, this.state);
            return this.setState({accommodations : relevantAccommodation})
        }
    }

    getAccommodationFromId = (id, acc) => {
        const { accommodations } = acc;
        const relevantAccommodation = accommodations.find(accommodation => {
            const accommodationId = accommodation.id;
            return accommodationId === id;
        });
        return relevantAccommodation
    }


    render() {
        const { accommodations } = this.state;
        // const host = accommodations.host.name
        // if(host !== undefined){
        //     console.log(host.name)
        // }
        console.log(accommodations)

        if(accommodations != undefined){
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
}

export default withRouter(Accommodation);
