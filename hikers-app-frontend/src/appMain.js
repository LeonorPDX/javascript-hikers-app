class AppMain {
    trailheads = []
    hikes = [] // Will need to clear and re-call each time user clicks a trailhead. Maybe make this an object? So I can access an array of hikes by a key (trailhead ID), not need to make another fetch if there is a key for the desired Trailhead ID already in the AppMain hikes object
    url = "http://localhost:3000"

    getTrailheads() {
        fetch(this.url + '/trailheads')
            .then(resp => resp.json())
            .then(json => console.log(json))
            .catch(err => alert(err))
        // make fetch request for all trailheads
        // populate trailheads property on appMain with instances
        // Call the render function
    }

    renderTrailheads() {
        // Create the DOM nodes and insert JSON data in the DOM
    }


}