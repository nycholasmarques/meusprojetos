const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('.arrow-left');
        console.log('control clicked', isLeft)

        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }
    })

    if (currentItem >= maxItems) {
        currentItem < 0
    }
    if (currentItem < 0) {
        currentItem = maxItems - 1;
    }
});