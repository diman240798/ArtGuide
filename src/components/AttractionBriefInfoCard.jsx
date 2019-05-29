import React from 'react'
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow, MDBView} from 'mdbreact';


class AttractionBriefInfoCard extends React.Component {

    image(img) {
        var src = img.src;
        window.open(src);
    }

    render() {


        const {id, name, description, longitude, latitude, imageSmall, imageBig} = this.props;

        const smallImagePath = `images/${imageSmall}.jpg`;
        const descriptionText = `${description.slice(0, 60)}...`;
        const linkPath = `/${id}`;


        return <React.Fragment>
            <MDBView hover zoom>
                <MDBCard border>
                    <MDBRow>
                        <MDBCol>
                            <MDBCardImage style={{width: "100%"}} src={smallImagePath}/>
                            <MDBCardBody>
                                <MDBCardTitle>{name}</MDBCardTitle>

                                <div className="d-none d-md-block">
                                    <MDBCardText>{descriptionText}</MDBCardText>
                                </div>

                                <MDBRow>
                                    <MDBCol xs={6}>
                                        <MDBBtn size="sm" style={{fontSize: "10px", backgroundColor: "#006C6D"}}>
                                            Подробнее
                                        </MDBBtn>
                                    </MDBCol>

                                    <MDBCol size={1}/>

                                    <img onClick={img => this.image(img)} style={{marginTop: 4}} className="roadButton" src="images/build_road_red.png" alt="sdas"/>
                                </MDBRow>

                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBView>
            <hr style={{border: 0}}/>
        </React.Fragment>;
    }
}

export default AttractionBriefInfoCard;