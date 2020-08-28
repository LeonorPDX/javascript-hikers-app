class AppMain {   
    addHike = false;

    bindEventListeners() {
        const findHike = document.getElementById("find-hike-btn");
        const addHikeBtn = document.getElementById("add-hike-btn");
        const hikeFormContainer = document.querySelector(".form-container");
        findHike.addEventListener("click", Trailhead.renderTrailheads);
        addHikeBtn.addEventListener("click", () => {
            this.addHike = !this.addHike;
            if (this.addHike) {
              hikeFormContainer.style.display = "block";        
            } else {
              hikeFormContainer.style.display = "none";
            }
          });
    }

}