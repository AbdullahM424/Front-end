// userProfile.js

document.addEventListener('DOMContentLoaded', function () {
    const viewProfile = document.getElementById('viewProfile');
    const editProfileForm = document.getElementById('editProfileForm');
    const editProfileBtn = document.getElementById('nameTeamBtn');
    const cancelEditBtn = document.getElementById('cancelBtn');
    const saveProfileBtn = document.getElementById('saveTeambtn');

    editProfileBtn.addEventListener('click', function () {
        viewProfile.style.display = 'none';
        editProfileForm.style.display = 'block';
    });

    cancelEditBtn.addEventListener('click', function () {
        viewProfile.style.display = 'block';
        editProfileForm.style.display = 'none';
    });

    saveProfileBtn.addEventListener('click', function () {
        // Get values from the form
        const editedName = document.getElementById('editUserName').value;

        // Update the view with the new values
        document.getElementById('userName').textContent = editedName;
        // Hide the form and show the view
        viewProfile.style.display = 'block';
        editProfileForm.style.display = 'none';
    });
});
