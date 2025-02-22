document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 2000);
});
