import React from 'react'
import MapComponent from '../components/MapComponent'
import {connect} from "react-redux";
import * as actions from '../actions'
import {MDBCol, MDBRow} from "mdbreact";
import MapBottomButton from "../components/MapBottomButton";
import * as LocalRepository from "../repo/LocalRepository";

class MapPage extends React.PureComponent {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    setMarkers(type) {

    }

    render() {
        const {fetchPlaceById, fetchPlacesByType, places} = this.props;


        let bottomButtons = LocalRepository.LINKS.map(link => {
            let type = `${link.slice(0, link.length - 1)}`;
            let image = `/images/item_${type}.png`;
            let imageChosen = `/images/item_${type}_chosen.png`;
            return <div>
                <MDBCol size={1}/>
                <MDBCol size={1}>
                    <MapBottomButton
                        setMarkers={() =>this.setMarkers(type)}
                        image={image}
                        imageChosen={imageChosen}
                    />
                </MDBCol>
            </div>
        });



        return <React.Fragment>
            <MapComponent
                places={places}
                fetchPlaceById={fetchPlaceById}
                fetchPlacesByType={fetchPlacesByType}
            />
            <MDBRow>
                {bottomButtons}
            </MDBRow>
        </React.Fragment>;
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