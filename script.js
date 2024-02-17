const slider = document.querySelector('.slider');

function activate(e) {
    const items = document.querySelectorAll('.item');
    const screenWidth = window.innerWidth;

    if (e.target.matches('.next')) {
        if (screenWidth > 650) {
            slider.append(items[0]);
        } else {
            slider.append(items[1]);
        }
    } else if (e.target.matches('.prev')) {
        if (screenWidth > 650) {
            slider.append(items[items.length - 1]);
        } else {
            slider.append(items[0]);
        }
    }
}

document.addEventListener('click', activate, false);
