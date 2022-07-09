const images = document.querySelectorAll(".categ");
const texts = document.querySelectorAll(".more");
const arrows = document.querySelectorAll(".arrow");
const titles = document.querySelectorAll(".title-div");



function appear() {
  texts.forEach(text => {
    text.style.display = "initial";
  });
  arrows.forEach(arrow => {
    arrow.style.display = "initial";
  })
  titles.forEach(title => {
    title.style.display = "none";
  })
}

function dissapear() {
  texts.forEach(text => {
    text.style.display = "none";
  });
  arrows.forEach(arrow => {
    arrow.style.display = "none";
  })
  titles.forEach(title => {
    title.style.display = "initial";
  })
}


images.forEach(img => {
  img.addEventListener("mouseover", appear);
  img.addEventListener("mouseout", dissapear);
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
})


}

initMap();