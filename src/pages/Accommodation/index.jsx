import {Component} from "react";
import { withRouter } from 'react-router-dom';

class Accommodation extends Component{

    render() {
        const { id } = this.props.match.params;
        console.log(id)


        return(
            <p></p>
        )
}
}

export default withRouter(Accommodation);
