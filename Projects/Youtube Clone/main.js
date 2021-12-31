const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});


const actionIcons = document.querySelector('.info .actions i');

actionIcons.addEventListener('click', () => {
    actionIcons.classList.toggle('active');
});

