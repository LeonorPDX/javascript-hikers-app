class Hike {
    consturctor(name, distance, difficulty, hikeType, description) {

    }
    static all = {} // Access an array of hikes by a key (trailhead ID). On create, add hike to object. No need to make another fetch if there is a key for the desired Trailhead ID already in the AppMain hikes object

    static getHikes(event) {
        const th_id = event.target.id;
        console.log(`Get hikes button was clicked, get hikes from trailhead id ${th_id}`)
    }
}