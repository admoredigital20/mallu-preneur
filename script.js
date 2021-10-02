function sliderClick(event) {
    var elm = document.querySelector(".slider-active");
    if (elm !== null) {
        elm.classList.remove("slider-active");
    }
    event.target.parentNode.classList.add("slider-active")
}

function slider1() {
    document.getElementById("bsns-content").innerHTML = "Influencer management";
    document.getElementById("bsns-img").style.backgroundImage = "url('./public/assets/img/bsnconsult-img2.png')";
}

function slider2() {
    document.getElementById("bsns-content").innerHTML = "Business education"
    document.getElementById("bsns-img").style.backgroundImage = "url('./public/assets/img/bsnconsult-img3.png')";
}

function slider3() {
    document.getElementById("bsns-content").innerHTML = "Marketing  consulting"
    document.getElementById("bsns-img").style.backgroundImage = "url('./public/assets/img/bsnconsult-img4.png')";
}

function slider4() {
    document.getElementById("bsns-content").innerHTML = "Business consulting"
    document.getElementById("bsns-img").style.backgroundImage = "url('./public/assets/img/bsnconsult-img.png')";
}