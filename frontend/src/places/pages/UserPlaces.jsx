import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!.',
        imageUrl: '',
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
        imageUrl: '',
        address: 'WOW',
        location: {
            lat: 40,
            lng: -73,
        },
        creator: 'u2'
    }
]

export default function UserPlaces() {
    return <PlaceList items={DUMMY_PLACES} />
}