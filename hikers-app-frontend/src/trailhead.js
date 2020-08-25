class Trailhead {
    constructor(name, location, amenities, fees, hikes) {
        this.name = name;
        this.location = location;
        this.amenities = amenities;
        this.fees = fees;
        this.hikes_count = hikes.length;

        AppMain.trailheads.push(this);
    }
}