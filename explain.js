const memo = document.getElementById('press');
const displayMemo = document.querySelector('.quest__content');
const allContents = document.querySelector('#contents');

memo.addEventListener('click',() => {
    displayMemo.classList.toggle('active');
    allContents.classList.toggle('active');
});
