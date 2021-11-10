import {Component} from "react";
// import { withRouter } from 'react-router-dom';

class Accommodation extends Component{
    getId(){
        const urlParams = new URLSearchParams(window.location.search);
        const paramId = urlParams.get('id');
        console.log(paramId)
    }
    render() {
        this.getId()
        // let id = this.props.match.params;
        // console.log(id)

        return(
            <p></p>
        )
}
}

export default Accommodation;
// export withRouter(Accommodation);
