document.querySelector('.send-button').addEventListener('click', function() {
    // Get input field values
    var name = document.querySelector('input[type="text"]').value.trim();
    var phoneNumber = document.querySelector('input[type="tel"]').value.trim();
    var email = document.querySelector('input[type="email"]').value.trim();
    var message = document.querySelector('textarea').value.trim();

    // Check if any field is empty
    if (name === '' || phoneNumber === '' || email === '' || message === '') {
        alert('Please fill up the form to submit.');
    } else {
        alert('Your message has been submitted!');
    }
});
