cilivianDeclaration = null;
window.onload = () => {
    cilivianDeclaration = new CilivianDeclaration();
}


class CilivianDeclaration extends Base{
    constructor() {
        super();
        this.initEvent();
        this.loadHeaderInfo();
    }

    initEvent(){
        document.querySelector('#declaration1').addEventListener('click',()=>{
            this.chooseDeclarationType(1);
        });
        document.querySelector('#declaration2').addEventListener('click',()=>{
            this.chooseDeclarationType(2);
        });
        document.querySelector('#declaration3').addEventListener('click',()=>{
            this.chooseDeclarationType(3);
        });
    }

    chooseDeclarationType(type){
        if(type==1){
            document.querySelector('#formDomesticGuests').classList.add('d-block');
            document.querySelector('#formMoveDeclaration').classList.remove('d-block');
            document.querySelector('#formEntryDeclaration').classList.remove('d-block');
            document.querySelector('#formMoveDeclaration').classList.add('d-none');
            document.querySelector('#formEntryDeclaration').classList.add('d-none');
        }else if(type==2){
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
