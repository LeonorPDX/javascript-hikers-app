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

    static all = []

    static getHikes(event) {
        Hike.all = [];
        const th_id = event.target.id;
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
        const trailhead_id = Hike.all[0].trailheadId; // Grab the trailhead ID from one of the hikes in the Hike.all array
        const th = Trailhead.all.find(e => e.id === trailhead_id); // Find the trailhead object with that id
        const main = document.getElementById("main");
        main.innerHTML = ""; // Clear all content from the 'main' section, so no duplicate data if Find Hikes is clicked multiple times

        const headline = document.createElement("div");
        headline.className = "content";
        const headlineText = document.createElement("h1");
        headlineText.className = "title";
        headlineText.innerText = `All Hikes at ${th.name}`;
        headline.appendChild(headlineText);
        main.appendChild(headline);

        const sortedHikes = Hike.all.sort(function(a, b) {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });

          sortedHikes.forEach(h => {
            const ancestor = document.createElement("div");
            ancestor.className = "tile is-ancestor";

            const parent = document.createElement("div");
            parent.className = "tile is-parent";

            const child = document.createElement("div");
            child.className = "tile is-child box";

            const level = document.createElement("div");
            level.className = "level";

            const left = document.createElement("div");
            left.className = "level-left";

            const leftItem = document.createElement("div");
            leftItem.className = "level-item";

            const title = document.createElement("p");
            title.className = "title";
            title.innerText = `${h.name}`;

            leftItem.appendChild(title);
            left.appendChild(leftItem);
            level.appendChild(left);
        
            const right = document.createElement("div");
            right.className = "level-right";

            const rightItem = document.createElement("div");
            rightItem.className = "level-item"; 

            const button = document.createElement("button");
            button.className = "button is-primary is-medium is-light";
            button.innerText = "+";
            button.id = `${h.id}`;
            button.addEventListener("click", Hike.showFull); // Need to make this function Real.

            rightItem.appendChild(button);
            right.appendChild(rightItem);
            level.appendChild(right)
            
            const content = document.createElement("p");
            content.innerHTML = `<strong>Difficulty:</strong> ${h.difficulty}<br>
                                <strong>Distance:</strong> ${h.distance}<br>
                                <strong>Elevation Gain:</strong> ${h.elevationGain}<br>
                                <strong>Hike Type:</strong> ${h.hikeType}`

            child.appendChild(level);
            child.appendChild(content);
            parent.appendChild(child);
            ancestor.appendChild(parent);
            
            main.appendChild(ancestor)
        })
    }

    static showFull() {
        console.log("The plus button was clicked to show full hike info")
    }

    static makeConfigObj(hikeAttrArr) {
        console.log(`Make config object function was triggered: ${hikeAttrArr}`)
    }
}