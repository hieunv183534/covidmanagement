managerEpidemicSituation = null;

window.onload = () => {
    unitApi = new UnitApi();
    managerEpidemicSituation = new ManagerEpidemicSituation();
}


class ManagerEpidemicSituation extends Base {
    constructor() {
        super();
        this.level = 0;
        this.unitCode = '|';
        this.initEvent();
        this.loadHeaderInfo();
        this.prepareUnitPage();
        this.loadListUnit(this.unitCode);
    }

    prepareUnitPage(){
        var userUnitCode = sessionStorage.getItem('userUnitCode');
        if(userUnitCode.split('|').length ==5){
            document.querySelector('#btnUpdateUnit').classList.remove('d-none');
            document.querySelector('#valueUnitDetail').value = sessionStorage.getItem('unitDetail');
        }
    }

    initEvent() {
        document.querySelector('#btnUpdateUnit').addEventListener('click',()=>{
            document.querySelector('.dialog').classList.add('d-block');
        })
        document.querySelector('.close-from').addEventListener('click',()=>{
            document.querySelector('.dialog').classList.remove('d-block');
        })
        document.querySelector(".search-box").addEventListener("keypress", (e) => {
            if (e.key === 'Enter') {
                this.loadListUnit(this.unitCode);
            }
        });
        document.querySelector('#btnRefresh').addEventListener('click', () => {
            document.querySelector(".search-box").value = '';
            this.index = 0;
            this.unitCode = '|';
            this.loadListUnit(this.unitCode);
        });
        document.querySelector('#btnReturn').addEventListener('click', () => {
            document.querySelector(".search-box").value = '';
            this.index = 0;
            this.setToParentUnit();
            this.loadListUnit(this.unitCode);
        })
        document.querySelector('#btnConfirmUpdate').addEventListener('click',()=>{
            let input1 = document.querySelector('#lastUpdateCases');
            let input2 = document.querySelector('#lastUpdateDeaths');
            let input3 = document.querySelector('#lastUpdateRecovereds');
            if(input1.value < 0 ){
                showToastMessenger('danger',"Kh??ng nh???n d??? li???u ??m!");
                input1.focus();
            }else if(input2.value<0){
                showToastMessenger('danger',"Kh??ng nh???n d??? li???u ??m!");
                input2.focus();
            }else if(input3.value<0){
                showToastMessenger('danger',"Kh??ng nh???n d??? li???u ??m!");
                input3.focus();
            }else{
                let body = {
                    lastUpdateCases: Number(input1.value),
                    lastUpdateDeaths: Number(input2.value) ,
                    lastUpdateRecovereds: Number(input3.value) 
                };
                unitApi.update(body, sessionStorage.getItem('userUnitCode')).then(res=>{
                    console.log(res);
                    showToastMessenger('success', "C???p nh???t th??nh c??ng!");
                    this.loadListUnit(this.unitCode);
                    document.querySelector('.dialog').classList.remove('d-block');
                }).catch(error=>{
                    console.log(error);
                    showToastMessenger('danger', "C???p nh???t th???t b???i. Vui l??ng th??? l???i sau!");
                    document.querySelector('.dialog').classList.remove('d-block');
                })
            }
        })
    }

    loadListUnit(unitCode) {
        showLoader();
        var keyword = document.querySelector('.search-box').value;
        unitApi.getById(unitCode, this.getPage(), this.count, keyword).then(res => {
            console.log(res.data);
            this.total = res.data.length;
            loadTable(listColums.Unit, res.data, this.index + 1);
            this.reloadPagingInfo();
            this.initEventTable();
        }).catch(error => {
            console.log(error);
            hideLoader();
            if (error.status == 405) {
                if (this.index == 0) {
                    loadTable(listColums.Account, [], this.index + 1);
                    showToastMessenger('success', "Kh??ng c?? b???n ghi n??o c??? hiuhiu!");
                } else {
                    showToastMessenger('danger', "B???n ???? ?????n trang cu???i m???t r???i!");
                    this.index = this.index - this.count;
                }
            } else {
                showToastMessenger('danger', "???? c?? l???i, vui l??ng th??? l???i sau!");
            }
        })
    }

    getPage() {
        return (this.index + this.count) / this.count;
    }

    tableRowOnDBClick(item, thisTr) {
        var popupBtns = [{ text: "????ng", enable: true }, { text: "Xem", enable: true }, { text: "QR Code", enable: true }]
        var btns = showPopupDialog("Th??ng b??o", "B???n c?? mu???n xem t??nh h??nh d???ch c??c ????n v??? con c???a ????n v??? " + item.unitName + " kh??ng?", popupBtns);
        btns[0].addEventListener('click', () => {
            hidePopupDialog();
        });
        btns[1].addEventListener('click', () => {
            hidePopupDialog();
            if (item.type == "w") {
                showToastMessenger("danger", "????y ???? l?? ????n v??? c???p nh??? nh???t!!");
            } else {
                this.unitCode = item.unitCode;
                document.querySelector(".search-box").value = '';
                this.index = 0;
                this.loadListUnit(this.unitCode);
            }
        });
        btns[2].addEventListener('click', () => {
            showUnitQr(item.unitCode);
        });
    }
}