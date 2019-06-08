import React from 'react';
// js
import { Map, TileLayer, Marker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
// css
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';

const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [39.9528, -75.1638];
const zoomLevel = 12;


class MapComponent extends React.Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        const {fetchPlaceById, fetchPlacesByType} =this.props;

        return (
                <Map
                    center={[47.225424, 39.723460]}
                    zoom={14}
                    maxZoom={19}
                    minZoom={10}
                >
                    <TileLayer
                        attribution={stamenTonerAttr}
                        url={stamenTonerTiles}
                    />

                    <MarkerClusterGroup>
                        <Marker position={[49.8397, 24.0297]} />
                        <Marker position={[52.2297, 21.0122]} />
                        <Marker position={[51.5074, -0.0901]} />
                    </MarkerClusterGroup>
                </Map>
        );
    }
}

export default MapComponent;


/*componentDidMount() {
        this.map = L.map('map', {
            center: [47.225424, 39.723460],
            zoom: 12,
            minZoom: 13,
            zoomControl: false
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            detectRetina: true,
            maxZoom: 19,
            maxNativeZoom: 17,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        const myIcon = L.icon({
            iconUrl: '/images/map_marker_park.png',
            iconSize: [20, 30],
        });
        L.marker([47.225424, 39.723460], {icon: myIcon})
            .on('click', (e) => {
                alert(e.latlng)
            })
            .addTo(this.map);
    }*/