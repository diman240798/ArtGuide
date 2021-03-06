import React from 'react';
// js
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import * as L from "leaflet";
import * as LocalRepository from "../repo/LocalRepository";
// css
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import MapComponentPreview from "./MapComponentPreview";

const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';


class MapComponent extends React.Component {

    render() {
        const {places, fetchTypes, fetchPlaceById, fetchPlacesByType} = this.props;

        return (
            <Map center={[47.225424, 39.723460]}
                 zoom={14}
                 maxZoom={19}
                 minZoom={10}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />

                <MarkerClusterGroup>
                    {places.map(place => {
                        const link = LocalRepository.getAttractionType(place.id);
                        let type = `${link.slice(0, link.length - 1)}`;
                        let icon = `/images/map_marker_${type}.png`;

                        let popUp = <Popup>
                            <div>A pretty CSS3 popup. <br/> Easily customizable.</div>
                        </Popup>;

                        const pointerIcon = new L.Icon({
                            iconUrl: icon,
                            iconRetinaUrl: icon,
                            iconAnchor: [0, 0],
                            popupAnchor: [5, 5],
                            iconSize: [10, 30],
                        })

                        return <Marker key={place.id} position={[place.longitude, place.latitude]} icon={pointerIcon}>
                            <Popup>
                                <MapComponentPreview {...place}/>
                            </Popup>
                        </Marker>
                    })
                    }
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