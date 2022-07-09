const sale = document.querySelector(".sale");
const dress = document.querySelector(".dresses");
const acc = document.querySelector(".accesories");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const arrow3 = document.querySelector(".arrow3");

sale.addEventListener("mouseover", () => {
  arrow1.style.opacity="1";
});
sale.addEventListener("mouseleave", () => {
  arrow1.style.opacity="0";
})
dress.addEventListener("mouseover", () => {
  arrow2.style.opacity="1";
});
dress.addEventListener("mouseleave", () => {
  arrow2.style.opacity="0";
})
acc.addEventListener("mouseover", () => {
  arrow3.style.opacity="1";
});
acc.addEventListener("mouseleave", () => {
  arrow3.style.opacity="0";
});


function initMap() {
  const position = {
    lat: 37.9908372,
    lng: 23.7383394
  }

const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 17,
  center: position
});

const marker = new google.maps.Marker({
    position,
    map,
    title: "Le Chic Store"
});


}

initMap();