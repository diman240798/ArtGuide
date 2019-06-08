import React from 'react'
import {MDBCard, MDBCardImage, MDBCardTitle, MDBCol, MDBMask, MDBRow, MDBView, NavLink} from "mdbreact";
import {connect} from "react-redux";
import styles from "../css/common.css"

class MapBottomButton extends React.Component {

    render() {
        const {setMarkers, image} = this.props;


        return <React.Fragment>
            <img onClick={img => setMarkers()} style={{marginTop: 4}}
                 className="roadButton" src={image} alt="sdas"/>
        </React.Fragment>;
    }
}

export default MapBottomButton;