import React from 'react'
import AttractionTypeCard from "../components/AttractionTypeCard";
import {connect} from "react-redux";
import {fetchPlaces} from '../actions'

class BriefPage extends React.Component {
    componentWillMount() {
        const {fetchPlaces} = this.props;
        fetchPlaces()
    }

    componentDidMount() {

    }

    render() {
        const {places} = this.props;

        if (places === "") return null;

        return <React.Fragment>
            {places}
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
        fetchPlaces: () => dispatch(fetchPlaces())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BriefPage)