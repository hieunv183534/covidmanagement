managerApproveAccount = null;
window.onload = () => {
    managerApproveAccount = new ManagerApproveAccount();
}


class ManagerApproveAccount extends Base{
    constructor() {
        super();
        this.initEvent();
        loadTable(listColums.Account, listDatas.Account, 1);
        this.initEventTable();
    }

    initEvent(){
        
    }

    tableRowOnDBClick(item){
        var popupBtns = [{text: "Đóng", enable: true},{text: "Xem các đơn vị con", enable: true},{text: "Xóa", enable: false}]
         var btns = showPopupDialog("CilivianEpidemicSituation",item.phoneNumber + " dzz",popupBtns );
         btns[0].addEventListener('click',()=>{
            hidePopupDialog();
         })
         btns[1].addEventListener('click',()=>{
            showToastMessenger('success',"load thành công!")
        })
    }

}
