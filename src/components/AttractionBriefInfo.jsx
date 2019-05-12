import React from 'react'
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class AttractionBriefInfo extends React.Component {

    render() {

        var card =
            <React.Fragment>
                <Card border="dark">
                    <Row>
                        <Col xs={5}>
                            <div>
                                <Image src="images/museum_kraevedeniya_small.jpg" fluid/>
                            </div>
                        </Col>
                        <Col xs={7}>
                            <Card.Title>Музей</Card.Title>
                            <div className="padding-end">
                                <Card.Text>sndfsdnfklsndflknsdlkfnsdlnflksdnfklndskfndsklnflksdnfkljsdnlfjnsd</Card.Text>
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