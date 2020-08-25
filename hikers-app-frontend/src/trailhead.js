class Trailhead {
    constructor(name, location, amenities, fees, hikes, id) {
        this.name = name;
        this.location = location;
        this.amenities = amenities;
        this.fees = fees;
        this.hikes_count = hikes.length;
        this.id = id;

        AppMain.trailheads.push(this);
    }
}