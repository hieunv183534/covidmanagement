cilivianEpidemicSituation = null;

window.onload = () => {
    cilivianEpidemicSituation = new CilivianEpidemicSituation();
}

class CilivianEpidemicSituation extends Base{
    constructor(){
        super();
        this.initEvent();
        console.log(listColums.Unit);
        console.log(JSON.parse(listDatas.Unit));
        loadTable(listColums.Unit, JSON.parse(listDatas.Unit));
    }

    initEvent(){

    }
}