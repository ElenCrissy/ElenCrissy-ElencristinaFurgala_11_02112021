import {Component} from "react";
import Banner from "../../components/Banner";
import Gallery from "../../components/CardList";
import '../../style/layout/Home.scss';

class Home extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data : [],
    //     };
    // }

    // componentDidMount() {
    //     const url = '/data.json'
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             this.setState({ data })
    //         })
    //         .catch(error => {
    //             console.log(`Fetch problem: ${error}`)
    //         });
    // }


    render() {
        // const { accommodations } = this.state;
      return(
        <div className="home-container">
            <Banner/>
            {/*<CardList accommodations={accommodations}/>*/}
            <Gallery />
        </div>
    )
  }
}

export default Home;
