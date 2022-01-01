cilivianHome = null;
window.onload = () => {
    personApi = new PersonApi();
    unitApi = new UnitApi();
    cilivianHome = new CilivianHome();
}


class CilivianHome extends Base {
    constructor() {
        super();
        this.initEvent();
        this.loadUserInfo();
    }

    initEvent() {

    }

    loadUserInfo() {
        personApi.get().then(res => {
            console.log(res);
            document.querySelector('p.display-user').innerHTML = res.data.fullName;
            this.loadUnit("|",1,70);
        }).catch(error => {
            
            console.log(error);
            var popupBtns = [{ text: "Đóng", enable: false }, { text: "Đồng ý", enable: true }, { text: "Xóa", enable: false }]
            var btns = showPopupDialog("Thông báo!", "Bạn chưa đăng kí thông tin cá nhân. Vui lòng đăng kí trước khi sửa dụng!", popupBtns);
            btns[0].addEventListener('click', () => {
                hidePopupDialog();
            })
            btns[1].addEventListener('click', () => {
                document.querySelector("#valueFullName").focus();
                hidePopupDialog();
            })
        })
    }
    
}
