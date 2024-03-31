const butt = document.getElementById('btn');

const texts = document.getElementById('text');

butt.addEventListener('click', () => {
    texts.textContent = 'ボタンをクリックしました';
});
