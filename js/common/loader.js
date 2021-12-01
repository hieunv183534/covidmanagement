var loader = document.querySelector('.loader');

document.querySelector('#btnTestLoader').addEventListener('click', (e) => {
    loader.setAttribute('isShow', 'show');
    setTimeout(() => {
        loader.setAttribute('isShow', 'hide');
    }, 10000);
});