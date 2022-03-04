//get the modal element 
let modal = document.getElementById('simpleModal');

//get open modal button
let modalBtn = document.getElementById('modalBtn');

//get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];
//with the [0] need to specify that you want the first class, even though
//   you only may have that one class. Need to do this when getting documents by class. 

//Listen for open click on the modal button
modalBtn.addEventListener('click', openModal);

//listen for close click
closeBtn.addEventListener('click', closeModal);

//listen for outside the modal click
window.addEventListener('click', clickOutside);

//function to close modal if outside click
function clickOutside(e) {
    if(e.target == modal){
        modal.style.display = 'none';
    }
    
}

//fucnction to open modal 
function openModal() {
    modal.style.display = 'block';
}

//function to close model
function closeModal() {
    modal.style.display = 'none';
}

//"on-click" submit function for form
function submitForm() {
    document.getElementById('contact-form').submit();
    //alert('Your message has been submitted, and you will be contacted within 48 hours!'); -- this now goes in the HTML form section "onsubmit"
}


//Check user input before submit -- computer will warn if user tries to submit with no input
function onInvalid(e) {
    e.target.classList.add('invalid'); //This creates a class that can be styled via CSS
}

const form = document.querySelectorAll('contact-form');

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('invalid', onInvalid);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valid = form.reportValidity();
    alert('Your message has been submitted, and you will be contacted within 48 hours!');
})