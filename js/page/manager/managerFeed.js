managerFeed = null;

window.onload = () => {
    managerFeed = new ManagerFeed();
}

class ManagerFeed extends Base{
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
        document.querySelector('#btnAddNewPost').addEventListener('click',()=>{
            document.querySelector('.dialog').classList.add('d-block');
        })
        document.querySelector('.close-from').addEventListener('click',()=>{
            document.querySelector('.dialog').classList.remove('d-block');
        })
    }
}