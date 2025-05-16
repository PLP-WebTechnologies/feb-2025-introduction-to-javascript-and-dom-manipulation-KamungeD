// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', function() {
    document.getElementById('description').textContent = "The text has been changed!";
});

// Modify CSS styles via JavaScript
document.getElementById('toggle-style-btn').addEventListener('click', function() {
    document.getElementById('main-title').classList.toggle('highlight');
});

// Add or remove an element when a button is clicked
document.getElementById('add-remove-btn').addEventListener('click', function() {
    const container = document.getElementById('dynamic-container');
    const existing = document.getElementById('dynamic-element');
    if (existing) {
        container.removeChild(existing);
    } else {
        const newElem = document.createElement('div');
        newElem.id = 'dynamic-element';
        newElem.textContent = 'I was added dynamically!';
        newElem.style.marginTop = '10px';
        container.appendChild(newElem);
    }
});