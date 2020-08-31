class Trailhead {
    constructor(name, location, amenities, fees, hikes, id) {
        this.name = name;
        this.location = location;
        this.amenities = amenities;
        this.fees = fees;
        this.hikes_count = hikes.length;
        this.id = id;

        Trailhead.all.push(this);
    }

    static all = []

    static getTrailheads() {
        fetch('http://localhost:3000/trailheads')
            .then(resp => resp.json())
            .then(data => {
                data.forEach(th => {
                    new Trailhead(th.name, th.location, th.amenities, th.fees, th.hikes, th.id)
                })
            })
            .then(this.renderTrailheads)
            .catch(err => alert(err));
    }

    static renderTrailheads() {
        const main = document.getElementById("main");
        main.innerHTML = ""; // Clear all content from the 'main' section, so no duplicate data if Find Hikes is clicked multiple times

        const headline = document.createElement("div");
        headline.className = "content";
        const headlineText = document.createElement("h1");
        headlineText.className = "title";
        headlineText.innerText = "All Trailheads";
        headline.appendChild(headlineText);
        main.appendChild(headline);

        const sortedTrailheads = Trailhead.all.sort(function(a, b) {
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

        const select = document.getElementById("trailhead-select");
        if (select.getElementsByTagName('option').length === 0) {
            sortedTrailheads.forEach(th => {
              const option = document.createElement("option");
              option.value = th.id;
              option.innerText = th.name
              select.appendChild(option)
            })
        }

        sortedTrailheads.forEach(th => {
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
            title.innerText = `${th.name}`;

            leftItem.appendChild(title);
            left.appendChild(leftItem);
            level.appendChild(left);

            if (th.hikes_count > 0) {
                const right = document.createElement("div");
                right.className = "level-right";

                const rightItem = document.createElement("div");
                rightItem.className = "level-item"; 

                const button = document.createElement("button");
                button.className = "button is-primary is-medium is-light";
                button.innerText = "View Hikes";
                button.id = `${th.id}`;
                button.addEventListener("click", Hike.getHikes); // Need to make this function Real. Can't do 'this.getHikes' because of the scope...

                rightItem.appendChild(button);
                right.appendChild(rightItem);
                level.appendChild(right)
            };
            
            const content = document.createElement("p");
            content.innerHTML = `<strong>Location:</strong> ${th.location}<br>
                                <strong>Fees:</strong> ${th.fees}<br>
                                <strong>Amentities:</strong> ${th.amenities}<br>
                                <strong>Number of Hikes:</strong> ${th.hikes_count}`

            child.appendChild(level);
            child.appendChild(content);
            parent.appendChild(child);
            ancestor.appendChild(parent);
            
            main.appendChild(ancestor)
        })
    }

    static increaseHikes() {
        const trailhead_id = Hike.all[0].trailheadId; // Grab the trailhead ID from one of the hikes in the Hike.all array
        const th = Trailhead.all.find(e => e.id === trailhead_id);
        th.hikes_count = th.hikes_count + 1
    }
}