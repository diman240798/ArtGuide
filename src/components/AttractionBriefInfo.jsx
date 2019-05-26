import React from 'react'
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AttractionBriefInfo extends React.Component {

    render() {

        const {id, name, description, longitude, latitude, imageSmall, imageBig} = this.props;

        const smallImagePath = `images/${imageSmall}.jpg`;
        const descriptionText = `${description.slice(0, 60)}...`;

        var card =
            <React.Fragment>
                <Card border="dark">
                    <Row>
                        <Col xs={5}>
                            <img class="img-fluid imageBriefSize" src={smallImagePath}/>
                        </Col>

                        <Col xs={7} style={{"margin-left": "0", "padding-left": "0"}}>
                            <Col xs={12}>
                                <Row>
                                    <h6>{name}</h6>
                                    <p>{descriptionText}</p>
                                </Row>
                            </Col>
                            <Col xs={12}>
                                <Row>
                                    <img className="moreButton" src="images/main_button_start_tour.png"/>
                                    <Col xs={1}/>
                                    <img className="roadButton" src="images/build_road_red.png"/>
                                </Row>
                            </Col>
                        </Col>

                    </Row>
                </Card>
                <hr style={{border: 0}}/>
            </React.Fragment>;

        return card;
    }
}

export default AttractionBriefInfo;