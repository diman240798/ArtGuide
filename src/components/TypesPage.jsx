import React from 'react'
import AttractionTypeCard from "../containers/AttractionTypeCard";
import {connect} from "react-redux";
import {fetchTypes} from '../actions'

class Types extends React.Component {
    componentWillMount() {
        const {fetchTypesList} = this.props;
        fetchTypesList()
    }

    componentDidMount() {

    }

    render() {
        const { types } = this.props;

        if (!types.length) return;

        return types.map(type =>
            <AttractionTypeCard {...type} />
        );
    }
}

const mapStateToProps = (state, onwProps) => {
    return {
        types: state.types.list
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTypesList: () => dispatch(fetchTypes())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Types)