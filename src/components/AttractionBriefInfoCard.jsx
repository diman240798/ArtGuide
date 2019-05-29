import React from 'react'
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol, MDBRow} from 'mdbreact';


class AttractionBriefInfoCard extends React.Component {

    render() {


        const {id, name, description, longitude, latitude, imageSmall, imageBig} = this.props;

        const smallImagePath = `images/${imageSmall}.jpg`;
        const descriptionText = `${description.slice(0, 60)}...`;


        return <React.Fragment>
            <MDBCard border>
                <MDBRow>
                    <MDBCol size={5}>
                        <MDBCardImage src={smallImagePath} zoom/>
                    </MDBCol>
                    <MDBCol size={7}>
                        <MDBCardBody>
                            <MDBCardTitle>{name}</MDBCardTitle>
                            <MDBCol>
                                <div className="d-none d-md-block">{descriptionText}</div>
                            </MDBCol>
                            <MDBRow>
                                <MDBCol md={6} xs={12}>
                                    <MDBBtn size="sm"
                                            style={{fontSize: "10px", padding: 6, backgroundColor: "#006C6D"}}>
                                        Подробнее
                                    </MDBBtn>
                                </MDBCol>
                                <MDBCol size={2}></MDBCol>
                                <MDBCol size={3}>
                                    <img style={{marginTop: 4}} className="roadButton" src="images/build_road_red.png"/>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
            <hr style={{border: 0}}/>
        </React.Fragment>;
    }
}

export default AttractionBriefInfoCard;