class Hike {
    constructor(name, difficulty, distance, elevationGain, hikeType, description, imgUrl, th_id) {
        this.name = name;
        this.distance = distance;
        this.difficulty = difficulty;
        this.elevationGain = elevationGain;
        this.hikeType = hikeType;
        this.description = description;
        this.imgUrl = imgUrl;

        const keys = Object.keys(Hike.all);
        if (keys.includes(`${th_id}`)) {
            Hike.all[th_id].push(this)
        } else {
            Hike.all[th_id] = [this]
        }
    }

    static all = {} // Access an array of hikes by a key (trailhead ID). On create, add hike to object. No need to make another fetch if there is a key for the desired Trailhead ID already in the AppMain hikes object

    static getHikes(event) {
        const th_id = event.target.id;
        console.log(`Get hikes button was clicked, get hikes from trailhead id ${th_id}`)
        fetch(`http://localhost:3000/trailheads/${th_id}/hikes`)
            .then(resp => resp.json())
            .then(data => {
                data.forEach(h => {
                    new Hike(h.name, h.difficulty, h.distance, h.elevation_gain, h.hike_type, h.description, h.image_url, h.trailhead_id)
                })
            })
            .then(Hike.renderHikes)
            .catch(err => alert(err));
    }

    static renderHikes() {
        console.log("Render hikes function was triggered.")
    }
}