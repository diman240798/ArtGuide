import React from 'react'
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class AttractionTypeCard extends React.Component {

    render() {

        var card =
            <React.Fragment>
                <Card border="dark">
                    <Row>
                        <Col xs={3}>
                            <div className="Center-Container padding">
                                <Image src="images/map_marker_museam.png"/>
                            </div>
                        </Col>
                        <Col xs={8}>
                            <div className="Center-Container">
                                <Card.Title>Музей</Card.Title>
                            </div>
                        </Col>
                    </Row>
                </Card>
                <hr style={{border: 0}}/>
            </React.Fragment>

        return card;
    }
}

export default AttractionTypeCard;