managerFeed = null;

window.onload = () => {
    notificationApi = new NotificationApi();
    managerFeed = new ManagerFeed();
}

class ManagerFeed extends Base{
    constructor() {
        super();
        this.mode = 1;
        this.initEvent();
        this.loadNotification(this.mode);
    }

    initEvent(){
        document.querySelector('#cilivianPost').addEventListener('click',()=>{
            this.mode = 1;
            this.loadNotification(this.mode);
            document.querySelector('.post-list').setAttribute('mode', "default")
        })
        document.querySelector('#medicalStaffPost').addEventListener('click',()=>{
            this.mode = 2;
            this.loadNotification(this.mode);
            document.querySelector('.post-list').setAttribute('mode', "default")
        })
        document.querySelector('#managerPost').addEventListener('click',()=>{
            this.mode = 3;
            this.loadNotification(this.mode);
            document.querySelector('.post-list').setAttribute('mode', "default")
        })
        document.querySelector('#seftPost').addEventListener('click',()=>{
            this.mode = 4;
            this.loadNotification(this.mode);
            document.querySelector('.post-list').setAttribute('mode', "seft")
        })
        document.querySelector('#approvePost').addEventListener('click',()=>{
            this.mode = 5;
            this.loadNotification(this.mode);
            document.querySelector('.post-list').setAttribute('mode', "approve");
        })

        
        document.querySelector('#btnAddNewPost').addEventListener('click',()=>{
            document.querySelector('.dialog').classList.add('d-block');
        })
        document.querySelector('.close-from').addEventListener('click',()=>{
            document.querySelector('.dialog').classList.remove('d-block');
        })
    }
}