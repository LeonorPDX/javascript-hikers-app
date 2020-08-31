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
              addHikeBtn.innerText = "Hide Hike Form"

              document.querySelector('.add-hike-form').addEventListener("submit", () => this.submitForm(event)); // 'this' is the instance of the AppMain class, and passing the event

            } else {
              hikeFormContainer.style.display = "none";
              addHikeBtn.innerText = "Add a Hike"
            }
          });
    }

    submitForm(event) {
      event.preventDefault();

      const hikeAttr = [];

      hikeAttr.push(document.getElementById("new-hike-name").value);
      hikeAttr.push(document.getElementById("trailhead-select").value);
      hikeAttr.push(document.getElementById("new-hike-difficulty").value);
      hikeAttr.push(document.getElementById("new-hike-distance").value);
      hikeAttr.push(document.getElementById("new-hike-elevation").value);
      hikeAttr.push(document.getElementById("new-hike-type").value);
      hikeAttr.push(document.getElementById("new-hike-img").value);
      hikeAttr.push(document.getElementById("new-hike-description").value);
      
      if (hikeAttr[0] != "") { // Only call config object method if the values are not empty so form reset doesn't trigger empty config objects
        Hike.makeConfigObj(...hikeAttr)
      }
      document.querySelector('.add-hike-form').reset();
    }

}