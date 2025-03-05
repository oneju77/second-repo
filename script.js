document.addEventListener("DOMContentLoaded", function () {
    const showMoreBtn = document.getElementById("showMoreBtn");
    const moreInfo = document.getElementById("moreInfo");

    showMoreBtn.addEventListener("click", function () {
        if (moreInfo.classList.contains("hidden")) {
            moreInfo.classList.remove("hidden");
            showMoreBtn.textContent = "Show Less";
        } else {
            moreInfo.classList.add("hidden");
            showMoreBtn.textContent = "Show More";
        }
    });
});
