medicalstaffFeed = null;

window.onload = () => {
    medicalstaffFeed = new MedicalstaffFeed();
}

class MedicalstaffFeed extends Base{
    constructor() {
        super();
        this.initEvent();
        loadListPost(listDatas.Posts);
    }

    initEvent(){
        document.querySelector('#cilivianPost').addEventListener('click',()=>{
            alert('tin người dân')
            document.querySelector('.post-list').setAttribute('mode', "default")
        })
        document.querySelector('#medicalStaffPost').addEventListener('click',()=>{
            alert('tin nhân viên y tế')
            document.querySelector('.post-list').setAttribute('mode', "default")
        })
        document.querySelector('#managerPost').addEventListener('click',()=>{
            alert('tin quản lí')
            document.querySelector('.post-list').setAttribute('mode', "default")
        })
        document.querySelector('#seftPost').addEventListener('click',()=>{
            alert('tin của mình')
            document.querySelector('.post-list').setAttribute('mode', "seft")
        })
        
        document.querySelector('#btnAddNewPost').addEventListener('click',()=>{
            document.querySelector('.dialog').classList.add('d-block');
        })
        document.querySelector('.close-from').addEventListener('click',()=>{
            document.querySelector('.dialog').classList.remove('d-block');
        })
    }
}