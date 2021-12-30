managerApproveAccount = null;
window.onload = () => {
    managerApproveAccount = new ManagerApproveAccount();
}


class ManagerApproveAccount extends Base{
    constructor() {
        super();
        this.initEvent();
        loadTable(listColums.Account, listDatas.Account, 1);
    }

    initEvent(){
        
    }

}
