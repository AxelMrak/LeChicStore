// SUBMIT NEWSLATTER

const btn = document.querySelector(`.btn`);


btn.addEventListener(`click`, ()=>{
  if (confirm(`Do you want suscribe to our Newslatter?`) == true) {
    const email = document.getElementById("email-field").value;
    sessionStorage.setItem(`EmailTo`, `${email}`);
    alert(`Thanks, the offers and news will send to ${email}`)
  } else {
    alert(`Ok, you can follow us in our social networks.`);
  };
});

// END NEWSLATTER


// EFFECT OF ARROWS IN DIV 
const sale = document.querySelector(`.sale`);
const dress = document.querySelector(`.dress`);
const accesories = document.querySelector(`.accesories`);
const saleArrow = document.querySelector(`.arrow-sale`);
const dressArrow = document.querySelector(`.arrow-dress`);
const accArrow = document.querySelector(`.arrow-acc`);

// ALL THESE EVENT LISTENERS CAN BE RESUME IN A FUNCTION, BUT IS BETTER FOR UNDERSTAND THE FUNCTIONALITY IN EACH ONE.
sale.addEventListener(`mouseenter`, e => {
  sale.style.height="80%"
  saleArrow.style.display="initial"
});

sale.addEventListener(`mouseleave`, () => {
  sale.style.height="40%"
  saleArrow.style.display="none"
});

dress.addEventListener(`mouseenter`, e => {
  dress.style.height="80%"
  dressArrow.style.display="initial"
});

dress.addEventListener(`mouseleave`, () => {
  dress.style.height="40%"
  dressArrow.style.display="none"
});

accesories.addEventListener(`mouseenter`, e => {
  accesories.style.height="80%"
  accArrow.style.display="initial"
});

accesories.addEventListener(`mouseleave`, () => {
  accesories.style.height="40%"
  accArrow.style.display="none"
});

// 


// GOOGLE MAPS API

function initMap() {

  const position = {
    lat: 37.9908372,
    lng: 23.7383394
  }

const map = new google.maps.Map(document.getElementById(`map`), {
  zoom: 17,
  center: position
});

const marker = new google.maps.Marker({
    position,
    map,
    title: `Le Chic Store`
});


}

initMap();

// END GOOGLE MAPS API


