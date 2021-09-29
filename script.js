function sliderClick(event) {
    var elm = document.querySelector(".slider-active");
    if (elm !== null) {
        elm.classList.remove("slider-active");
    }
    event.target.parentNode.classList.add("slider-active")
}

function slider1() {
    document.getElementById("bsns-content").innerHTML = "Influencer management"
}

function slider2() {
    document.getElementById("bsns-content").innerHTML = "Business education"
}

function slider3() {
    document.getElementById("bsns-content").innerHTML = "Marketing  consulting"
}

function slider4() {
    document.getElementById("bsns-content").innerHTML = "Business consulting"
}