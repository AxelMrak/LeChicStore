//Divs appear in scroll

const divsAnimated = document.querySelectorAll(`.animation-appear`);

divsAnimated.forEach(div => {
  const appearDiv = event => {
    let positionDiv = div.getBoundingClientRect().top; //Distance div to top
    let screenHeight = window.innerHeight / 3; //Height of window
    if (positionDiv < screenHeight) { 
      div.style.transition = `all 0.5s`; //Set transition for smooth effect
      div.style.opacity = `1`; //Appear
    } else {
      div.style.transition = `all 1s`;
      div.style.opacity = `0`;
    }
  };
  window.addEventListener(`scroll`, appearDiv) //Event Listener
});

// Event with Jquery and SweetAlerts2
$(".btn").click(() => {
  // Email Validator 
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  const email = document.getElementById(`email-field`).value;

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: true
  });
  //First, confirm if the email is valid
  if (emailRegex.test(email)) {
    swalWithBootstrapButtons.fire({
      title: 'Do you want suscribe to our Newslatter?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: false
    }).then((result) => {
      //Second, with the result confirm the operation.
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Suscribe!',
          `Thanks, the offers and news will send to ${email}`,
          'success'
        );
        sessionStorage.setItem(`EmailTo`, `${email}`); //Saving data (Simulate)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Ok, you can follow us in our social networks.',
          'error'
        );
      }
    });
  } else {
    swalWithBootstrapButtons.fire(
      'Incorrect',
      'Insert a valid email.',
      'error'
    );
  }
});

// EFFECT OF ARROWS IN DIV 
const sale = document.querySelector(`.sale`);
const dress = document.querySelector(`.dress`);
const accesories = document.querySelector(`.accesories`);
const saleArrow = document.querySelector(`.arrow-sale`);
const dressArrow = document.querySelector(`.arrow-dress`);
const accArrow = document.querySelector(`.arrow-acc`);


// ALL THESE EVENT LISTENERS CAN BE RESUME IN A FUNCTION AND CAN USE JQUERY, BUT IS BETTER FOR UNDERSTAND THE FUNCTIONALITY IN EACH ONE.
sale.addEventListener(`mouseenter`, e => {
  saleArrow.style.display = "initial"
});

sale.addEventListener(`mouseleave`, () => {
  saleArrow.style.display = "none";
});

dress.addEventListener(`mouseenter`, e => {
  dressArrow.style.display = "initial";
});

dress.addEventListener(`mouseleave`, () => {
  dressArrow.style.display = "none";
});

accesories.addEventListener(`mouseenter`, e => {
  accArrow.style.display = "initial";
});

accesories.addEventListener(`mouseleave`, () => {
  accArrow.style.display = "none";
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

