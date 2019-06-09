import React from 'react'
import AttractionTypeCard from "../components/AttractionTypeCard";
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
        const {types} = this.props;

        if (!types.length) return null;

        return <React.Fragment>
            {
                types.map(type =>
                    <AttractionTypeCard key={type.title} {...type} />
                )
            }
        </React.Fragment>
    }
}

const mapStateToProps = (state, ownProps) => {
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