cilivianFeed = null;

window.onload = () => {
    cilivianFeed = new CilivianFeed();
}

class CilivianFeed extends Base{
    constructor() {
        super();
        this.initEvent();
        loadListPost(listDatas.Posts);
    }

    initEvent(){
        document.querySelector('#cilivianPost').addEventListener('click',()=>{
            alert('tin người dân')
        })
        document.querySelector('#medicalStaffPost').addEventListener('click',()=>{
            alert('tin nhân viên y tế')
        })
        document.querySelector('#managerPost').addEventListener('click',()=>{
            alert('tin quản lí')
        })
    }
}