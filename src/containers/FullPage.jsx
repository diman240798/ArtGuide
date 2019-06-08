import React from 'react'
import {connect} from "react-redux";
import {fetchPlaceById} from '../actions'
import AttractionFullInfoCard from "../components/AttractionFullInfoCard";

class FullPage extends React.Component {

    componentWillMount() {
        let url = this.props.location.pathname;
        const placeId = url.slice("/places/".length, url.length)

        const {getPlaceById} = this.props;
        getPlaceById(placeId)
    }

    componentDidMount() {

    }

    render() {
        const {place} = this.props;
        if (!place) return null;

        return <React.Fragment>
            <AttractionFullInfoCard {...place} />
        </React.Fragment>
    }
}

const mapStateToProps = (state, ownProps) => ({
    place: state.fullpage.place

});

const mapDispatchToProps = dispatch => ({
    getPlaceById: id => dispatch(fetchPlaceById(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FullPage)