document.addEventListener("DOMContentLoaded", () => {
    const app = new AppMain;
    app.bindEventListeners();
    Trailhead.getTrailheads();
});