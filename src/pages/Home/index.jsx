import {Component} from "react";
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        // const url = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json';
        const url = 'data.json'
        fetch(url)
            .then((response) => response.text())
            .then(text => console.log(text))
            // .then((data) => {
            //     this.setState((currentState) =>{
            //         return(
            //             data = currentState.data
            //         )
            //     })
            // })
            .catch(error => {
                console.log(`Fetch problem: ${error}`)
            });
    }

  render() {
        const { accommodations } = this.state
      console.log({ accommodations })
      return(
        <div className="home-container">
            <Banner/>
            <Gallery accommodations={accommodations}/>
        </div>
    )
  }
}

export default Home;
