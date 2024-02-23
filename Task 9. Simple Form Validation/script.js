function validateForm() {
    var emailInput = document.getElementById('email').ariaValueMax.trim();
    if (emailInput === '') {
        alert('Please enter an email address');
        return false; 
    }
}