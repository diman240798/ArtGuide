import React from 'react'
import {connect} from "react-redux";
import AttractionFullInfoCard from "../components/AttractionFullInfoCard";
import * as LocalRepository from '../repo/LocalRepository';

class FullPage extends React.Component {
    state = {
        placeId: -1
    };

    componentWillMount() {
        let url = this.props.location.pathname;
        const placeId = url.slice("/places/".length, url.length)
        this.state.placeId = placeId;
    }

    componentDidMount() {

    }

    render() {
        const {getPlaceById} = this.props;
        const {placeId} = this.state;
        const place = getPlaceById(placeId);

        return <React.Fragment>
            <AttractionFullInfoCard {...place} />
        </React.Fragment>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        getPlaceById: id => LocalRepository.getPlaceById(id)
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FullPage)