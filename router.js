const router = {
    routes: {
        '/overview': '<h1>Overview Page</h1>',
        '/projects': '<h1>Projects Page</h1>',
        '/machines': '<h1>Machines Page</h1>',
        '/user-profile': '<h1>User Profile Page</h1>'
    },
    navigateTo: function(path) {
        window.history.pushState({}, path, window.location.origin + path);
        this.updateContent(path);
    },
    updateContent: function(path) {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = this.routes[path] || '<h1>404 - Page Not Found</h1>';
    },
    init: function() {
        window.onpopstate = () => this.updateContent(window.location.pathname);
        this.updateContent('/overview'); // Load the default route
    }
};

document.addEventListener('DOMContentLoaded', () => router.init());