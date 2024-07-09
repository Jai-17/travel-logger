async function getRandomCoordinates(address) {
    function hashCode(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0;
        }
        return hash;
    }

    const seed = hashCode(address);
    const random = (seed) => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    const lat = -90 + random(seed) * 180;
    const lng = -180 + random(seed + 1) * 360;
    return {
        lat: lat,
        lng: lng
    };
}

module.exports = getRandomCoordinates;