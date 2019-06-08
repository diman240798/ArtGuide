import React from 'react'
import MapComponent from '../components/MapComponent'
import {connect} from "react-redux";
import * as actions from '../actions'

class MapPage extends React.PureComponent {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        const {fetchPlaceById, fetchPlacesByType, places} =this.props;

        return <MapComponent
            places={places}
            fetchPlaceById={fetchPlaceById}
            fetchPlacesByType={fetchPlacesByType}
        />;
    }
};

const mapStateToProps = (state, ownProps) => ({
    places: state.map.list
});

const mapDispatchToProps = dispatch => ({
    fetchPlaceById: id => dispatch(actions.fetchPlaceById(id)),
    fetchPlacesByType: type => dispatch(actions.fetchPlacesByType(type)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapPage)