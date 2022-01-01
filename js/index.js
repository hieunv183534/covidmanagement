authApi = null;
window.onload = () => {
    authApi = new AuthApi();
    initEvent();
}

function initEvent() {
    document.querySelector("#btnCilivian").addEventListener('click', () => {
        acc = {
            phoneNumber: "0971883025",
            password: "abcd1221"
        }
        authApi.login(acc).then(res => {
            console.log(res);
            sessionStorage.setItem('token', "Bearer " + res.token);
            window.location.href = "./page/cilivian/cilivian-home.html";
        }).catch(error => {
            showToastMessenger("danger","Tài khoản không hợp lệ hoặc chưa được duyệt");
        })
    });

    document.querySelector("#btnManager").addEventListener('click', () => {
        window.location.href = "./page/manager/manager-home.html";
    })

    document.querySelector("#btnMedicalStaff").addEventListener('click', () => {
        window.location.href = "./page/medicalstaff/medicalstaff-home.html";
    });

    document.querySelector('#pop1').addEventListener('click', () => {
        console.log("show popup");
        var popupBtns = [{ text: "Thêm", enable: true }, { text: "Sửa", enable: true }, { text: "Xóa", enable: false }]
        resultBtns = showPopupDialog("Cảnh báo", "Bạn có muốn xóa tất cả bản ghi?", popupBtns);
        resultBtns[0].addEventListener('click', () => {
            alert("thêm");
        })
        resultBtns[1].addEventListener('click', () => {
            alert("sửa");
        })
        resultBtns[2].addEventListener('click', () => {
            alert("xóa");
        })
    });

    document.querySelector('#pop2').addEventListener('click', () => {
        hidePopupDialog();
    })
}





