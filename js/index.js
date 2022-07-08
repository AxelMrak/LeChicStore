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

