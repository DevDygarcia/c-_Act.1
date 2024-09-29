document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle');
    const contentDiv = document.querySelector('.content');

    toggleButton.addEventListener('click', () => {
        if (contentDiv.style.display === 'none' || contentDiv.style.display === '') {
            contentDiv.style.display = 'block';
        } else {
            contentDiv.style.display = 'none';
        }
    });
});
