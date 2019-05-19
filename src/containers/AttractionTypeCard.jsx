import React from 'react'
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {connect} from "react-redux";

class AttractionTypeCard extends React.Component {

    render() {
        const {title, image} = this.props;
        const path = `images/${image}`;

        var card =
            <React.Fragment>
                <Card border="dark">
                    <Row>
                        <Col xs={3}>
                            <div className="Center-Container padding">
                                <Image src={path}  />
                                {/*src="images/map_marker_museam.png"*/}
                            </div>
                        </Col>
                        <Col xs={8}>
                            <div className="Center-Container">
                                <Card.Title>{title}</Card.Title>
                            </div>
                        </Col>
                    </Row>
                </Card>
                <hr style={{border: 0}}/>
            </React.Fragment>;

        return card;
    }
}

const mapStateToProps = (state, onwProps) => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AttractionTypeCard)