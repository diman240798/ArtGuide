import Col from "react-bootstrap/Col";
import AttractionTypeCard from "../components/AttractionTypeCard";
import AttractionBriefInfo from "../components/AttractionBriefInfo";
import AttractionFullInfo from "../components/AttractionFullInfo";
import Row from "react-bootstrap/Row";
import React from "react";


class MainPage extends React.Component {

    render() {
        <Row>
            <Col md={5}>
                <div>
                    <AttractionTypeCard/>
                    <AttractionBriefInfo/>
                    <AttractionFullInfo/>
                </div>
            </Col>

            <Col md={2}/>

            <Col md={5}>
                <h1>MAP</h1>
            </Col>
        </Row>
    }
}
