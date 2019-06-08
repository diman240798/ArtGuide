import React from 'react'
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow, MDBView} from "mdbreact";

class AttractionFullInfoCard extends React.Component {

    render() {
        const {id, name, description, longitude, latitude, imageSmall, imageBig} = this.props;

        const imagePath = `/images/${imageBig}.jpg`;


        return <React.Fragment>
            <MDBView hover zoom>
                <MDBCard style={{width: "50em"}} border>
                    <MDBRow>
                        <MDBCol>
                            <div onClick={() => {}}>
                                <MDBCardImage style={{width: "100%"}} src={imagePath}/>
                            </div>

                            <MDBCardBody>
                                <MDBCardTitle style={{color: "#006C6D"}}>{name}</MDBCardTitle>

                                <div className="d-none d-md-block">
                                    <MDBCardText>{description}</MDBCardText>
                                </div>

                                <MDBRow>
                                    <MDBCol xs={6}>
                                        <MDBBtn onClick={() => {}} size="sm" style={{fontSize: "10px", backgroundColor: "#006C6D"}}>
                                            Подробнее
                                        </MDBBtn>
                                    </MDBCol>

                                    <MDBCol size={1}/>

                                    <img onClick={img => this.buildRoute(img)} style={{marginTop: 4}}
                                         className="roadButton" src="/images/build_road_red.png" alt="sdas"/>
                                </MDBRow>

                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBView>
        </React.Fragment>
    }
}

export default AttractionFullInfoCard;