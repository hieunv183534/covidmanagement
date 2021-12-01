var toastMessenger = document.querySelector('.toast-messenger');

document.querySelector('#btnTestMesSuccess').addEventListener('click', () => {
    showToastMessenger('success', 'Cập nhật thành công!')
});

document.querySelector('#btnTestMesDanger').addEventListener('click', () => {
    showToastMessenger('danger', 'Cập nhật thất bại!')
});

function showToastMessenger(type, text) {
    toastMessenger.setAttribute('type', type);
    toastMessenger.querySelector('.mes-text').innerHTML = text;
    toastMessenger.setAttribute('isShow', 'show');
    setTimeout(() => {
        toastMessenger.setAttribute('isShow', 'hide');
    }, 4000);
}