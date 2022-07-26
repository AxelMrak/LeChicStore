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
  sale.style.height = "80%"
  saleArrow.style.display = "initial"
});

sale.addEventListener(`mouseleave`, () => {
  sale.style.height = "40%";
  saleArrow.style.display = "none";

});

dress.addEventListener(`mouseenter`, e => {
  dress.style.height = "80%";
  dressArrow.style.display = "initial";
});

dress.addEventListener(`mouseleave`, () => {
  dress.style.height = "40%";
  dressArrow.style.display = "none";
});

accesories.addEventListener(`mouseenter`, e => {
  accesories.style.height = "80%";
  accArrow.style.display = "initial";
});

accesories.addEventListener(`mouseleave`, () => {
  accesories.style.height = "40%";
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

