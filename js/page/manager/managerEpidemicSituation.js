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
    }

    initEvent() {
    
    }
}