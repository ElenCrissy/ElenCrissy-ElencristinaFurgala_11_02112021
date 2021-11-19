import {Component} from "react";
import Banner from "../../components/Banner";
import CardList from "../../components/CardList";
import '../../style/layout/Home.scss';

class Home extends Component {
    render() {
      return(
        <div className="home-container">
            <Banner />
            <CardList />
        </div>
    )
  }
}

export default Home;
