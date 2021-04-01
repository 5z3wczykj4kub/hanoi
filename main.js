const discContainers = document.querySelectorAll('.disc-container');
const discs = document.querySelectorAll('.disc');

let draggedDisc;


discs.forEach(disc => {
    disc.addEventListener('dragstart', () => {
        if(disc != disc.parentElement.lastElementChild) return;
        disc.classList.add('dragging');
        setTimeout(() => disc.classList.add('invisible'), 0);
        draggedDisc = document.querySelector('.dragging');
    })

    disc.addEventListener('dragend', () => {
        disc.classList.remove('dragging');
        disc.classList.remove('invisible');
    })
})

discContainers.forEach(discContainer => {
    discContainer.addEventListener('dragover', event => {
        event.preventDefault();
    })

    discContainer.addEventListener('drop', () => {
        if(discContainer.lastElementChild && parseInt(getComputedStyle(draggedDisc).width) > parseInt(getComputedStyle(discContainer.lastElementChild).width)) return;

        if(draggedDisc) {
            discContainer.append(draggedDisc);
        }

        // console.log(parseInt(getComputedStyle(draggedDisc).width), parseInt(getComputedStyle(discContainer.lastElementChild).width));

    })
})