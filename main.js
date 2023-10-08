const filterItems = document.querySelectorAll('.filter-item');
const postBoxes = document.querySelectorAll('.post-box');

// Add click event listener to each filter item
filterItems.forEach(item => {
item.addEventListener('click', () => {
    // Toggle active class on clicked item
    filterItems.forEach(item => item.classList.remove('active-filter'));
    item.classList.add('active-filter');

    // Show or hide post boxes based on their category
    const selectedCategory = item.getAttribute('data-filter');
    postBoxes.forEach(box => {
    if (selectedCategory === 'all' || box.querySelector('.category').textContent.toLowerCase() === selectedCategory) {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
    });
});
});