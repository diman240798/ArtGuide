import React from 'react'
import {MDBCard, MDBCardImage, MDBCardTitle, MDBCol, MDBMask, MDBRow, MDBView, NavLink} from "mdbreact";
import {connect} from "react-redux";
import styles from "../css/common.css"

class AttractionTypeCard extends React.Component {

    render() {
        const {title, image, link, maskColor} = this.props;
        const imagePath = `images/${image}`;
        const linkPath = `/${link}`;

        return <React.Fragment>
            <NavLink to={linkPath} activeStyle={{ color: 'teal' }} style={{width: "20rem"}}>
                <MDBView hover zoom>

                    <MDBCard border className="hoverable">
                        <MDBRow>
                            <MDBCol style={{marginTop: "1rem", marginBottom: "1rem", marginLeft: "1rem"}} size={3}
                                    xs={3}
                                    sm={3} md={3}>
                                <MDBCardImage src={imagePath} zoom/>
                            </MDBCol>

                            <MDBCol size={6} xs={6} sm={7} md={8}>
                                <div className="Center-Container">
                                    <MDBCardTitle className="text-body hoverBold">{title}</MDBCardTitle>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>

                    <MDBMask className="flex-center" overlay={maskColor}/>
                </MDBView>
            </NavLink>
            <hr style={{border: 0}}/>
        </React.Fragment>;
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