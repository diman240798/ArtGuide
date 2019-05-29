import React from 'react'
import {connect} from "react-redux";
import '../css/common.css'
import {Link} from "react-router-dom";
import {MDBCard, MDBCardImage, MDBCardTitle, MDBCol, MDBRow} from "mdbreact";

class AttractionTypeCard extends React.Component {

    render() {
        const {title, image, link} = this.props;
        const imagePath = `images/${image}`;
        const linkPath = `/${link}`;

        return <React.Fragment>
            <Link to={linkPath}>
                <MDBCard style={{height: "4rem"}} border>
                    <MDBRow>
                        <MDBCol style={{margin: "1rem"}} size={3}>
                            <MDBCardImage src={imagePath} zoom/>
                        </MDBCol>

                        <MDBCol style={{padding: 15}} className="green_hover" size={8}>
                            <MDBCardTitle className="text-body">{title}</MDBCardTitle>

                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </Link>
            <hr style={{border: 0}}/>
        </React.Fragment>;
    }
}

const mapStateToProps = (state, onwProps) => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AttractionTypeCard)