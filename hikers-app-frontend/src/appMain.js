class AppMain {
    
    bindEventListeners() {
        const findHike = document.getElementById("find-hike-btn");
        const addHike = document.getElementById("add-hike-btn");
        findHike.addEventListener("click", Trailhead.renderTrailheads);
        addHike.addEventListener("click", () => {console.log("Add Hike was clicked")})
    }

}