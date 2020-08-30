class AppMain {   
    addHike = false;

    bindEventListeners() {
        const findHike = document.getElementById("find-hike-btn");
        const addHikeBtn = document.getElementById("add-hike-btn");
        const hikeFormContainer = document.getElementById("form-container");
        findHike.addEventListener("click", Trailhead.renderTrailheads);
        addHikeBtn.addEventListener("click", () => {
            this.addHike = !this.addHike;
            if (this.addHike) {
              hikeFormContainer.style.display = "block";
              const select = document.getElementById("trailhead-select");
              Trailhead.all.forEach(th => {
                const option = document.createElement("option");
                option.value = th.id;
                option.innerText = th.name
                select.appendChild(option)
              })
              // Add event listener for the form
              // Populate the trailhead options in the form with the Trailhead.all array        
            } else {
              hikeFormContainer.style.display = "none";
            }
          });
    }

}