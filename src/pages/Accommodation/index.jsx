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
                console.log(this.state)
            })
            .catch(error => {
                console.log(`Fetch problem: ${error}`)
            });
    }

    componentDidUpdate(prevProps) {
        // Utilisation classique (pensez bien à comparer les props) :
        if (this.props.id !== prevProps.id) {
            this.fetchData(this.props.id);
        }
    }

    getAccommodationFromId(id) {

        // const relevantAccommodation = accommodations.find(accommodation => {
        //     const accommodationIdString = accommodation.id.toString();
        //     console.log("here2",accommodationIdString)
        //     return accommodationIdString === id;
        // });
        // return relevantAccommodation
    }

    render() {
        // const { id } = this.props.match.params;

        return(
            <section className="accommodation">
                {/*<Gallery/>*/}
                <div className="title"></div>
                <div className="location"></div>
                <div className="owner"></div>
                //map for tags
                <div className="stars"></div>
                {/*<DetailBlock/>*/}
            </section>
        )
}
}

export default withRouter(Accommodation);
