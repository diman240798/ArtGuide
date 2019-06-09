import React from 'react'
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow, MDBView} from 'mdbreact';


class AttractionBriefInfoCard extends React.Component {

    buildRoute(img) {
        var src = img.src;
        window.open(src);
    }

    showMore(linkId) {
        window.location = linkId;
    }

    render() {


        const {id, name, description, imageSmall} = this.props;

        const smallImagePath = `images/${imageSmall}.jpg`;
        const descriptionText = `${description.slice(0, 60)}...`;
        const linkId = `/places/${id}`;


        return <React.Fragment>
            <MDBView hover zoom>
                <MDBCard style={{width: "20rem"}} border>
                    <MDBRow>
                        <MDBCol>
                            <div onClick={() => this.showMore(linkId)}>
                                <MDBCardImage style={{width: "100%"}} src={smallImagePath}/>
                            </div>

                            <MDBCardBody>
                                <MDBCardTitle style={{color: "#006C6D"}}>{name}</MDBCardTitle>

                                <div className="d-none d-md-block">
                                    <MDBCardText>{descriptionText}</MDBCardText>
                                </div>

                                <MDBRow>
                                    <MDBCol xs={6}>
                                        <MDBBtn onClick={() => this.showMore(linkId)} size="sm"
                                                style={{fontSize: "10px", backgroundColor: "#006C6D"}}>
                                            Подробнее
                                        </MDBBtn>
                                    </MDBCol>

                                    <MDBCol size={1}/>

                                    <img onClick={img => this.buildRoute(img)} style={{marginTop: 4}}
                                         className="roadButton" src="images/build_road_red.png" alt="sdas"/>
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