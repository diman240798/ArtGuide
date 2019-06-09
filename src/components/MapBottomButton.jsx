import React from 'react'

class MapBottomButton extends React.Component {

    render() {
        const {setMarkers, image} = this.props;


        return <React.Fragment>
            <img onClick={img => setMarkers()} style={{marginTop: 4}}
                 className="roadButton" src={image} alt="sdas"/>
        </React.Fragment>;
    }
}

export default MapBottomButton;