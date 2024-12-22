const hamburger = document.getElementById('hamburger')
const accountdropdown = document.getElementById('account-dropdown')
const overlay = document.getElementById('dropdown-overlay')

hamburger.addEventListener('click', () => {
    document.getElementById('nav-list').classList.toggle('hidden')
    document.getElementById('x-icon').classList.toggle('hidden')
    document.getElementById('h-icon').classList.toggle('hidden')
});

accountdropdown.addEventListener('click', () => {
    document.getElementById('dropdown-content').classList.toggle('hidden')
    document.getElementById('dropdown-content').classList.toggle('flex')
    overlay.classList.toggle('hidden')
});

overlay.addEventListener('click', () => {
    document.getElementById('dropdown-content').classList.toggle('hidden')
    document.getElementById('dropdown-content').classList.toggle('flex')
    overlay.classList.toggle('hidden')
});