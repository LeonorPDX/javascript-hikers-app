class AppMain {
    trailheads = []
    hikes = {} // Access an array of hikes by a key (trailhead ID). On create, add hike to object. No need to make another fetch if there is a key for the desired Trailhead ID already in the AppMain hikes object
    
    bindEventListeners() {
        const findHike = document.getElementById("find-hike-btn");
        const addHike = document.getElementById("add-hike-btn");
        findHike.addEventListener("click", this.getTrailheads);
        addHike.addEventListener("click", () => {console.log("Add Hike was clicked")})
    }
    
    getTrailheads() {
        fetch('http://localhost:3000/trailheads')
            .then(resp => resp.json())
            .then(json => console.log(json))
            .catch(err => alert(err));
        // populate trailheads property on appMain with instances
        // Call the render function
    }

    renderTrailheads() {
        // Create the DOM nodes and insert JSON data in the DOM
    }


}