class AppMain {
    static trailheads = []
    static hikes = {} // Access an array of hikes by a key (trailhead ID). On create, add hike to object. No need to make another fetch if there is a key for the desired Trailhead ID already in the AppMain hikes object
    
    bindEventListeners() {
        const findHike = document.getElementById("find-hike-btn");
        const addHike = document.getElementById("add-hike-btn");
        findHike.addEventListener("click", this.renderTrailheads);
        addHike.addEventListener("click", () => {console.log("Add Hike was clicked")})
    }
    
    getTrailheads() {
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

    getHikes() {
        console.log("Get hikes button was clicked")
    }

    renderTrailheads() {
        const main = document.getElementById("main");
        main.innerHTML = "";

        const headline = document.createElement("div");
        headline.className = "content";
        const headlineText = document.createElement("h1");
        headlineText.className = "title";
        headlineText.innerText = "All Trailheads";
        headline.appendChild(headlineText);
        main.appendChild(headline);

        AppMain.trailheads.forEach(th => {
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
                button.addEventListener("click", () => {console.log("Get hikes was clicked")});

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


}