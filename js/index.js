window.onload = () => {
    initEvent();
}

function initEvent() {
    document.querySelector("#btnCilivian").addEventListener('click', () => {
        window.location.href = "./page/cilivian/cilivian-home.html";
    });

    document.querySelector("#btnManager").addEventListener('click', () => {
        alert("okok");
    })

    document.querySelector("#btnMedicalStaff").addEventListener('click', () => {
        alert("okok");
    });
}