class AppAdapter {
    static url = 'http://localhost:3000'

    static getTrailheads() {
        fetch(`${this.url}/trailheads`)
            .then(resp => resp.json())
            .then(data => {
                data.forEach(th => {
                    new Trailhead(th.name, th.location, th.amenities, th.fees, th.hikes, th.id)
                })
            })
            .then(Trailhead.renderTrailheads)
            .catch(err => alert(err));
    }

    static getHikes(event) {
        Hike.all = [];
        const th_id = event.target.id;
        fetch(`${AppAdapter.url}/trailheads/${th_id}/hikes`)  // Explicitly call AppAdapter for url and not this because we're using the event context to capture target info
            .then(resp => resp.json())
            .then(data => {
                data.forEach(h => {
                    new Hike(h.name, h.difficulty, h.distance, h.elevation_gain, h.hike_type, h.description, h.image_url, h.id, h.trailhead_id)
                })
            })
            .then(Hike.renderHikes)
            .catch(err => alert(err));
    }

    static fetchNewHike(obj) {
        Hike.all = [];
        fetch(`${this.url}/hikes`, obj)
        .then(resp => resp.json())
        .then(data => {
            data.forEach(h => {
                new Hike(h.name, h.difficulty, h.distance, h.elevation_gain, h.hike_type, h.description, h.image_url, h.id, h.trailhead_id)
            })
        })
        .then(alert("Hike was successfully created, see hikes below."))
        .then(Hike.renderHikes)
        .then(Trailhead.increaseHikes)
        .catch(err => alert(err));
    }
}
