const memo = document.getElementById('press');
const displayMemo = document.querySelector('.quest__content');

memo.addEventListener('click',() => {
    displayMemo.classList.toggle('active');
});
