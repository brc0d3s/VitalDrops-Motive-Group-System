// Function to verify Admin ID and show the login fields
function verifyAdminId() {
    const adminId = document.getElementById('admin-id').value;
    const adminIdField = document.getElementById('admin-id'); 
    const verifyButton = document.getElementById('verify-btn');
    const loginFields = document.getElementById('login-fields');

    if (adminId === 'admin123') { 
        loginFields.style.display = 'block';
        adminIdField.disabled = true;
        verifyButton.disabled = true;
    } else {
        alert('Incorrect Admin ID. Please try again.');
    }
}
