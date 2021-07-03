const password1 = document.form.p1;
const password2 = document.form.p2;

const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if(password1.value !== password2.value) {
        alert('passwords does not match');
        return false
    } else {
        alert('form submitted');
    }
});



// // console.log(typeof (password1.password2))

// let allPassword = password1 && password2;

// submitBtn.addEventListener('click', function() {
//     if(typeof allPassword == 'number' ) {
//         alert('passwrod is number');
    
//     } else {
//         alert('password not number')
//     }
// )};