managerEpidemicSituation = null;

window.onload = () => {
    managerEpidemicSituation = new ManagerEpidemicSituation();
}

class ManagerEpidemicSituation extends Base {
    constructor() {
        super();

        this.count =100;
        this.index =1;

        this.initEvent();
        console.log(listColums.Unit);
        console.log(JSON.parse(listDatas.Unit));
        loadTable(listColums.Unit, JSON.parse(listDatas.Unit), 1);
        this.initEventTable();
    }

    initEvent() {
        document.querySelector('#btnUpdateUnit').addEventListener('click',()=>{
            document.querySelector('.dialog').classList.add('d-block');
        })
        document.querySelector('.close-from').addEventListener('click',()=>{
            document.querySelector('.dialog').classList.remove('d-block');
        })
    }

    tableRowOnDBClick(item){
        var popupBtns = [{text: "Đóng", enable: true},{text: "Xem các đơn vị con", enable: true},{text: "Xóa", enable: false}]
         var btns = showPopupDialog("CilivianEpidemicSituation",item.unitName + " dzz",popupBtns );
         btns[0].addEventListener('click',()=>{
            hidePopupDialog();
         })
         btns[1].addEventListener('click',()=>{
            showToastMessenger('success',"load thành công!")
        })
    }
}