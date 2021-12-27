cilivianDeclaration = null;
window.onload = () => {
    cilivianDeclaration = new CilivianDeclaration();
}


class CilivianDeclaration extends Base{
    constructor() {
        super();
        this.initEvent();
    }

    initEvent(){
        document.querySelector("#cbbDeclarationType input").addEventListener('input',()=>{
            alert(1);
        });
        console.log(document.querySelector("#cbbDeclarationType input"));
    }

    chooseDeclarationType(type){
        console.log(type);
        if(type=='1'){
            document.querySelector('#formDomesticGuests').classList.add('d-block');
            document.querySelector('#formMoveDeclaration').classList.remove('d-block');
            document.querySelector('#formEntryDeclaration').classList.remove('d-block');
            document.querySelector('#formMoveDeclaration').classList.add('d-none');
            document.querySelector('#formEntryDeclaration').classList.add('d-none');
        }else if(type=='2'){
            document.querySelector('#formEntryDeclaration').classList.add('d-block');
            document.querySelector('#formDomesticGuests').classList.remove('d-block');
            document.querySelector('#formMoveDeclaration').classList.remove('d-block');
            document.querySelector('#formDomesticGuests').classList.add('d-none');
            document.querySelector('#formMoveDeclaration').classList.add('d-none');

        }else{
            document.querySelector('#formMoveDeclaration').classList.add('d-block');
            document.querySelector('#formDomesticGuests').classList.remove('d-block');
            document.querySelector('#formEntryDeclaration').classList.remove('d-block');
            document.querySelector('#formDomesticGuests').classList.add('d-none');
            document.querySelector('#formEntryDeclaration').classList.add('d-none');
        }
    }
}
