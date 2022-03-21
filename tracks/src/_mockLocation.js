import * as Location from 'expo-location'

const tenMetresWithDegrees = 0.0001

const getRandomStep = (currValue) => currValue + (Math.random() - 0.2) * tenMetresWithDegrees

let currLongitude = 27.567444
let currLatitude = 53.893009

const getLocation = (counter) => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0, 
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: currLongitude,
            latitude: currLatitude
        }
    }
}

let counter = 0

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    currLatitude = getRandomStep(currLatitude)
    currLongitude = getRandomStep(currLongitude)
}, 1000)