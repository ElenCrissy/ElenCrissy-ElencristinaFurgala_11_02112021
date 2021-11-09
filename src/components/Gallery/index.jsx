import {Component} from "react";
import Card from "../Card";

class Gallery extends Component{
    constructor(props) {
        super(props)
        this.state = {
            accommodations : [],
        };
    }

    componentDidMount() {
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

    render(){
        const {accommodations} = this.state;
        return(
            <section className="gallery">
                <ul>
                    {accommodations.map((accommodation, index) => (
                        <Card
                            key={`${accommodation.id}-${index}`}
                            title={accommodation.title}
                            picture={accommodation.cover}
                        />
                    ))
                    }
                </ul>
            </section>
        )
    }
}

export default Gallery;