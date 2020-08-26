class Hike {
    constructor(name, difficulty, distance, elevationGain, hikeType, description, imgUrl, id, trailheadId) {
        this.name = name;
        this.distance = distance;
        this.difficulty = difficulty;
        this.elevationGain = elevationGain;
        this.hikeType = hikeType;
        this.description = description;
        this.imgUrl = imgUrl;
        this.id = id;
        this.trailheadId = trailheadId;

        Hike.all.push(this)
    }

    static all = [] // Access an array of hikes by a key (trailhead ID). On create, add hike to object. No need to make another fetch if there is a key for the desired Trailhead ID already in the AppMain hikes object

    static getHikes(event) {
        const th_id = event.target.id;
        console.log(`Get hikes button was clicked, get hikes from trailhead id ${th_id}`)
        fetch(`http://localhost:3000/trailheads/${th_id}/hikes`)
            .then(resp => resp.json())
            .then(data => {
                data.forEach(h => {
                    new Hike(h.name, h.difficulty, h.distance, h.elevation_gain, h.hike_type, h.description, h.image_url, h.id, h.trailhead_id)
                })
            })
            .then(Hike.renderHikes)
            .catch(err => alert(err));
        
    }

    static renderHikes() {
        console.log("Render hikes function was triggered.");
        const trailhead_id = Hike.all[0].trailheadId;
        const th = Trailhead.all.find(e => e.id === trailhead_id);
        const main = document.getElementById("main");
        main.innerHTML = ""; // Clear all content from the 'main' section, so no duplicate data if Find Hikes is clicked multiple times

        const headline = document.createElement("div");
        headline.className = "content";
        const headlineText = document.createElement("h1");
        headlineText.className = "title";
        headlineText.innerText = `All Hikes at ${th.name}`;
        headline.appendChild(headlineText);
        main.appendChild(headline);

        const hikes = Hike.all;
        hikes.forEach(h => {
            console.log(`${h.name}`)
        })
    }
}