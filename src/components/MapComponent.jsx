import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';



const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [39.9528, -75.1638];
const zoomLevel = 12;


export default class MapComponent extends React.Component {
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

    render() {
        return (
                <Map
                    center={[47.225424, 39.723460]}
                    zoom={12}
                >
                    <TileLayer
                        attribution={stamenTonerAttr}
                        url={stamenTonerTiles}
                    />
                </Map>
        );
    }
}