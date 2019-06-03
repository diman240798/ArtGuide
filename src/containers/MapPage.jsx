import React from 'react'
import MapComponent from '../components/MapComponent'

class MapPage extends React.PureComponent {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        return <MapComponent/>;
    }
};

export default MapPage;