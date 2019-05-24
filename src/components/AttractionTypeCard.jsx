import React from 'react'
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {connect} from "react-redux";
import '../css/common.css'
import {Link} from "react-router-dom";

class AttractionTypeCard extends React.Component {

    render() {
        const {title, image, link} = this.props;
        const imagePath = `images/${image}`;
        const linkPath = `/${link}`

        var card =
            <div className="green_hover">
                <Link to={linkPath}>
                    <Card border="dark">
                        <Row>
                            <Col xs={3}>
                                <div className="Center-Container padding">
                                    <Image src={imagePath}/>
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
                </Link>
                <hr style={{border: 0}}/>
            </div>;

        return card;
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