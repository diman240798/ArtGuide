import React from 'react'
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

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
                            <div>
                                <img class="img-fluid imageBriefSize" src={smallImagePath} />
                            </div>
                        </Col>
                        <Col xs={7}>
                            <h6>{name}</h6>
                            <div className="padding-end">
                                <p>{descriptionText}</p>
                            </div>
                        </Col>
                    </Row>
                </Card>
                <hr style={{border: 0}}/>
            </React.Fragment>

        return card;
    }
}

export default AttractionBriefInfo;