medicalstaffDeclarationList = null;
window.onload = () => {
    declarationApi = new DeclarationApi();
    medicalstaffDeclarationList = new MedicalstaffDeclarationList();
}


class MedicalstaffDeclarationList extends Base {
    constructor() {
        super();
        this.mode = 1;
        this.initEvent();
        this.loadHeaderInfo();
        this.loadListDeclaration(this.mode);
        this.initEventTable();
    }

    initEvent() {
        document.querySelector('#listdomesticquest').addEventListener('click', () => {
            this.mode = 1;
            this.loadListDeclaration(this.mode);
        });
        document.querySelector('#listmovedeclaration').addEventListener('click', () => {
            this.mode = 2;
            this.loadListDeclaration(this.mode);
        });
        document.querySelector('#listentrydeclaration').addEventListener('click', () => {
            this.mode = 3;
            this.loadListDeclaration(this.mode);
        });

        document.querySelector(".search-box").addEventListener("keypress", (e) => {
            if (e.key === 'Enter') {
                this.loadListDeclaration(this.mode);
            }
        });
        document.querySelector('#btnRefresh').addEventListener('click',()=>{
            document.querySelector(".search-box").value = '';
            this.index =0;
            this.loadListDeclaration(this.mode);
        })
    }

    loadListDeclaration (mode) {
        var keyword = document.querySelector('.search-box').value;
        if (keyword == null) keyword = '';
        showLoader();
        if (mode == 1) {
            declarationApi.getListDomesticQuest(this.index, this.count, keyword).then(res => {
                console.log(res.data);
                this.total = res.data.length;
                loadTable(listColums.DomesticQuest, res.data, this.index + 1);
                this.reloadPagingInfo();
                this.initEventTable();
            }).catch(error => {
                console.log(error);
                hideLoader();
                if (error.status == 405) {
                    if (this.index == 0) {
                        loadTable(listColums.Account, [], this.index + 1);
                        showToastMessenger('success', "Không có bản ghi nào cả hiuhiu!");
                    } else {
                        showToastMessenger('danger', "Bạn đã đến trang cuối mất rồi!");
                        this.index = this.index - this.count;
                    }
                } else {
                    showToastMessenger('danger', "Đã có lỗi, vui lòng thử lại sau!");
                }
            })
        } else if(mode ==2) {
            declarationApi.getListMoveDeclaration(this.index, this.count, keyword).then(res => {
                console.log(res.data);
                this.total = res.data.length;
                loadTable(listColums.MoveDeclaration, res.data, this.index + 1);
                this.reloadPagingInfo();
                this.initEventTable();
            }).catch(error => {
                console.log(error);
                hideLoader();
                if (error.status == 405) {
                    if (this.index == 0) {
                        loadTable(listColums.Account, [], this.index + 1);
                        showToastMessenger('success', "Không có bản ghi nào cả hiuhiu!");
                    } else {
                        showToastMessenger('danger', "Bạn đã đến trang cuối mất rồi!");
                        this.index = this.index - this.count;
                    }
                } else {
                    showToastMessenger('danger', "Đã có lỗi, vui lòng thử lại sau!");
                }
            })
        }else{
            declarationApi.getListEntryDeclaration(this.index, this.count, keyword).then(res => {
                console.log(res.data);
                this.total = res.data.length;
                loadTable(listColums.EntryDeclaration, res.data, this.index + 1);
                this.reloadPagingInfo();
                this.initEventTable();
            }).catch(error => {
                console.log(error);
                hideLoader();
                if (error.status == 405) {
                    if (this.index == 0) {
                        loadTable(listColums.Account, [], this.index + 1);
                        showToastMessenger('success', "Không có bản ghi nào cả hiuhiu!");
                    } else {
                        showToastMessenger('danger', "Bạn đã đến trang cuối mất rồi!");
                        this.index = this.index - this.count;
                    }
                } else {
                    showToastMessenger('danger', "Đã có lỗi, vui lòng thử lại sau!");
                }
            })
        }
    }

    tableRowOnDBClick(item, thisTr) {
        var popupBtns = [{ text: "Đóng", enable: true }, { text: "Duyệt", enable: true }, { text: "Từ chối", enable: true }]
        var btns = showPopupDialog("Thông báo", "Bạn có muốn duyệt tài khoản " + item.phoneNumber + " không?", popupBtns);
        btns[0].addEventListener('click', () => {
            hidePopupDialog();
        });
        btns[1].addEventListener('click', () => {
            let body = {
                userId: item.userId,
                status: 1
            }
            hidePopupDialog();
            accountApi.accountBrowsing(body).then(res => {
                console.log(res);
                showToastMessenger('success', "Duyệt thành công!");
                thisTr.remove();
            }).catch(error => {
                console.log(error);
                showToastMessenger('danger', "Duyệt thất bại. Vui lòng thử lại sau!");
            })
        });
        btns[2].addEventListener('click', () => {
            let body = {
                userId: item.userId,
                status: 1
            }
            hidePopupDialog();
            accountApi.accountBrowsing(body).then(res => {
                console.log(res);
                showToastMessenger('success', "Từ chối thành công!");
                thisTr.remove();
            }).catch(error => {
                console.log(error);
                showToastMessenger('danger', "Từ chối thất bại. Vui lòng thử lại sau!");
            })
        });
    }

}
