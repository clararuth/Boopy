// Change dot color on hover
document.querySelectorAll('.link-dot').forEach((dot, index) => {
    dot.addEventListener('mouseover', () => {
        dot.style.backgroundColor = '#FFD700'; // Change to gold on hover
    });

    dot.addEventListener('mouseout', () => {
        // Restore original color after hover
        const colors = ['#FF6347', '#7B68EE', '#3CB371'];
        dot.style.backgroundColor = colors[index];
    });

    // Redirect to different links when dots are clicked
    dot.addEventListener('click', () => {
        let links = [
            'https://your-link-1.com', // Replace with actual URLs
            'https://your-link-2.com',
            'https://your-link-3.com'
        ];
        window.location.href = links[index];
    });
});
