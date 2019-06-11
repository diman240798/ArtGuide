import React from 'react'
import {connect} from "react-redux";
import {fetchPlacesByType} from '../actions'
import AttractionBriefInfoCard from "../components/AttractionBriefInfoCard";

class BriefPage extends React.Component {
    componentWillMount() {
        const {fetchPlaces} = this.props;
        let url = this.props.location.pathname;
        const attractionType = url.slice(1, url.length);
        fetchPlaces(attractionType)
    }

    componentDidMount() {

    }

    render() {
        const {places} = this.props;

        if (places.length === 0) return null;

        return <React.Fragment>
            {places.map(place => (
                <AttractionBriefInfoCard key={place.id} {...place} />
            ))}
        </React.Fragment>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        places: state.places.list
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPlaces: (attractionType) => dispatch(fetchPlacesByType(attractionType))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BriefPage)