const butt = document.getElementById('btn');

const texts = document.getElementById('text');

butt.addEventListener('click', () => {
    setTimeout(() => {
        texts.textContent = 'ボタンをクリックしました';
    }, 2000);
});
