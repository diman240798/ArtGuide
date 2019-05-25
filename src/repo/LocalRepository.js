/////////// Types
export const LINKS = [
    "museums", "theatres", "memorials", "stadiums", "parks"
];
export const ATTRACTION_TYPES = [
    "Museum", "Theatres", "Memorials", "Stadiums", "Parks"
];
const TYPES = [
    {
        title: ATTRACTION_TYPES[0],
        link: LINKS[0],
        image: "map_marker_museam.png"
    }, {
        title: ATTRACTION_TYPES[1],
        link: LINKS[1],
        image: "map_marker_theatre.png"
    }, {
        title: ATTRACTION_TYPES[2],
        link: LINKS[2],
        image: "map_marker_memorial.png"
    }, {
        title: ATTRACTION_TYPES[4],
        link: LINKS[3],
        image: "map_marker_stadium.png"
    }, {
        title: ATTRACTION_TYPES[4],
        link: LINKS[4],
        image: "map_marker_park.png"
    },
];


export function getTypes() {
    return TYPES;
}

///////// Places
import {data} from './data';
import {Place} from '../model/place'

const getAttractionType = (id) => {
    return ATTRACTION_TYPES[(id / 100)]
}

let places;

export function getPlaces(attractionType) {
    if (places) return places[attractionType];

    ATTRACTION_TYPES.forEach(type => {
        places[type] = [];
    });

    data.split('\n')
        .filter(line => line[0] !== '#')
        .forEach(line => {
            let valuesAndDesc = line.split("::");
            let values = valuesAndDesc[0].split(",");

            let id = values[0];
            let name = values[1];
            let description = valuesAndDesc[1];
            let longitude = values[2];
            let latitude = values[3];
            let imageSmall = values[4];
            let imageBig = values[5];

            let attractionType = getAttractionType(id);
            places[attractionType].push(new Place(id, name, description, longitude, latitude, imageSmall, imageBig));

        });

    return places[attractionType];
}

