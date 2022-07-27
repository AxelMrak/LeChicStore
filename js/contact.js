// Extract button for the DOM
const btn = document.getElementById(`btn`);

//Validator Function
const verificationFields = () => {

    // EXTRACT TO DOM
    const nameField = document.getElementById(`name`).value;
    const emailField = document.getElementById(`email`).value;
    const subjectField = document.getElementById(`subject`).value;
    const messageField = document.getElementById(`message`).value;

    // Email Validator
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    // Condition of analysis for each field in the form, can be better.
    if (emailRegex.test(emailField) && nameField.length !== 0 && subjectField.length !== 0 && messageField.length !== 0) {
        Swal.fire({
            title: 'Send!',
            text: `Thanks ${nameField}, we will contact you as soon as possible to your email ${emailField}`,
            imageUrl: 'https://marketinginbound.cl/wp-content/uploads/2020/08/4039dbf0e5561de5f05c8c3f546a8744.gif',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Send!',
        });
        sessionStorage.setItem(`Name`, `${nameField}`);
        sessionStorage.setItem(`Email`, `${emailField}`);
        sessionStorage.setItem(`Subject`, `${subjectField}`);
        sessionStorage.setItem(`Message`, `${messageField}`);
    } else if (emailRegex.test(emailField) !== true) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please, review your email.',
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please, fill all fields.',
        });
    };
};

// Event Click
$(`.btn`).click(verificationFields);




