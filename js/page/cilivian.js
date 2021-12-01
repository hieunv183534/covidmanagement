window.onload = () => {
    initEvent();
}

function initEvent() {
    document.querySelector("#cilivianHome").addEventListener('click', () => {
        window.location.href = "cilivian-home.html";
    })

    document.querySelector("#cilivianFeed").addEventListener('click', () => {
        window.location.href = "cilivian-feed.html";
    })

    document.querySelector("#cilivianDeclare").addEventListener('click', () => {
        window.location.href = "cilivian-declaration.html";
    })

    document.querySelector("#cilivianSituation").addEventListener('click', () => {
        window.location.href = "cilivian-epidemic-situation.html";
    })
}