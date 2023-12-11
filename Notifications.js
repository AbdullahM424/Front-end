// script.js
document.addEventListener('DOMContentLoaded', function () {
    const notificationsContainer = document.getElementById('notifications-container');

    document.getElementById('notifications').addEventListener('click', function (event) {
        event.stopPropagation();
        notificationsContainer.classList.toggle('show');
    });

    document.addEventListener('click', function () {
        notificationsContainer.classList.remove('show');
    });

    notificationsContainer.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});

