import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!.',
        imageUrl: 'https://media.timeout.com/images/101705309/image.jpg',
        address: 'WOW',
        location: {
            lat: 40,
            lng: -73,
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire States Building',
        description: 'One ofd the most famous sky scrapers in the world!.',
        imageUrl: 'https://www.esbnyc.com/sites/default/files/2020-01/ESB%20Day.jpg',
        address: 'WOW',
        location: {
            lat: 40,
            lng: 70,
        },
        creator: 'u2'
    }
]

export default function UserPlaces() {
    const { userId } = useParams();
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator == userId);

    return <PlaceList items={loadedPlaces} />
}