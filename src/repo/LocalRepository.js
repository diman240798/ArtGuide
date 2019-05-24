/////////// Types
export const links = [
    "museums", "theatres", "memorials", "stadiums", "parks"
];
const TYPES = [
    {
        title: "Museum",
        link: links[0],
        image: "map_marker_museam.png"
    }, {
        title: "Theatre",
        link: links[1],
        image: "map_marker_theatre.png"
    }, {
        title: "Memorial",
        link: links[2],
        image: "map_marker_memorial.png"
    }, {
        title: "Stadium",
        link: links[3],
        image: "map_marker_stadium.png"
    }, {
        title: "Park",
        link: links[4],
        image: "map_marker_park.png"
    },
];


export function getTypes() {
    return TYPES;
}
///////// Places

export function getPlaces() {
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", "data.csv", false);
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                const  allText = rawFile.responseText;
                return allText;
            }
        }
    };
}

