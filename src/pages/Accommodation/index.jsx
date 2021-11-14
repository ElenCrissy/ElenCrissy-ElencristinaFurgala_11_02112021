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

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log((this.state))
        // if (this.state !== prevState){
        //     this.fetchData()
        //     const { id } = this.props.match.params;
        //     const accommodation = this.setState({accommodations : this.getAccommodationFromId(id, this.state)});
        //     return accommodation
        // }
        const { id } = this.props.match.params;
        if (this.state.accommodations.length > 1) {
            const relevantAccommodation = this.getAccommodationFromId(id, this.state);
            return this.setState({accommodations : relevantAccommodation})
        }
    }

    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     const { id } = this.props.match.params;
    //     if(this.state.accommodations.length > 1){
    //         return this.setState({accommodations : this.getAccommodationFromId(id, this.state)})
    //     }
    // }

    getAccommodationFromId(id, acc) {
        const { accommodations } = acc;
        const relevantAccommodation = accommodations.find(accommodation => {
            const accommodationId = accommodation.id;
            return accommodationId === id;
        });
        return relevantAccommodation
    }


    render() {
        const { accommodations } = this.state;
        console.log(accommodations)
        const host = accommodations.host
        // console.log(host)
        if(host !== undefined){
            console.log(host.name)
        }

            return(
                <section className="accommodation">
                    {/*<Gallery/>*/}
                    <div className="title">{accommodations.title}</div>
                    <div className="location">{accommodations.location}</div>
                    <div className="owner"></div>
                    {host.name ? {accommodations.host.name}}
                    {/*//map for tags*/}
                    <div className="rating">{accommodations.rating}</div>
                    {/*<DetailBlock/>*/}
                </section>
            )

    }
}

export default withRouter(Accommodation);
