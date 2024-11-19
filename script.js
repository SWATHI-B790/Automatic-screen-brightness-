// Function to switch between Home and About tabs
function changeTab(tab) {
    const homeContent = document.getElementById('home-content');
    const aboutContent = document.getElementById('about-content');

    if (tab === 'home') {
        homeContent.style.display = 'block';
        aboutContent.style.display = 'none';
    } else {
        homeContent.style.display = 'none';
        aboutContent.style.display = 'block';
    }
}
