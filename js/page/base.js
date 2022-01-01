﻿unitApi = null;
personApi = null;
listUnitForCbb = null;

class Base {
    constructor() {
        this.initEventBase();
    }

    initEventBase() {
        var seft = this;

        // sự kiện click menu-item
        var menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', function () {
                seft.menuItemOnClick(this);
            });
        });

        // sự kiện toggle menu
        document.querySelector('.toggle-menu').addEventListener('click', function () {
            seft.toggleMenu();
        });


        // sự kiện click vào user menu 
        document.querySelector(".content-header-right .user").addEventListener('click', () => {
            document.querySelector(".content-header-right .list-option").classList.add('list-option-show');
        })

        // sự kiện blur user menu 
        document.querySelector(".content-header-right .user").addEventListener('blur', () => {
            setTimeout(() => {
                document.querySelector(".content-header-right .list-option").classList.remove('list-option-show');
            }, 250);
        });


        // sự kiện click btn logout
        document.querySelector(".item-option.btn-logout").addEventListener('click', () => {
            window.location.href = "../../index.html";
        });

        if (document.querySelector('.paging-bar')) {
            document.querySelectorAll('.paging-bar .dropdown-item').forEach(item => {
                item.addEventListener('click', () => {
                    this.count = Number(item.getAttribute('valuename'));
                    showToastMessenger('success',"count= "+ this.count);
                })
            });

            document.querySelector(".paging-bar .next-page").addEventListener('click',()=>{
                showToastMessenger('success',"trang sau");
            });

            document.querySelector(".paging-bar .pre-page").addEventListener('click',()=>{
                showToastMessenger('success',"trang trước");
            });
        };

        if (document.querySelector("#btnRefresh")) {
            document.querySelector("#btnRefresh").addEventListener("click", () => {
                showLoader();
                setTimeout(()=>{
                    hideLoader();
                    showToastMessenger('danger', "Refresh thất bại!");
                },5000)
            })
        };

        if (document.querySelector(".search-box")) {
            document.querySelector(".search-box").addEventListener("keypress", (e) => {
                if (e.key === 'Enter') {
                    showToastMessenger('danger', e.target.value);
                }
            })
        };
    }

    menuItemOnClick(thisElement) {
        console.log(thisElement);
        var toHref = thisElement.getAttribute('toHref');
        window.location.href = `./${toHref}.html`;
    }

    toggleMenu() {
        var menuElement = document.querySelector('.menu');
        if (menuElement.classList.contains('menu-in-toggle')) {
            menuElement.classList.remove('menu-in-toggle');
        } else {
            menuElement.classList.add('menu-in-toggle');
        }
    }

    initEventTable(){
        var trs = document.querySelectorAll('tbody tr');
        trs.forEach(tr=>{
           tr.addEventListener('dblclick',()=>{
               var item = JSON.parse(tr.getAttribute("myItem"));
               this.tableRowOnDBClick(item);
           }) 
        });
    }

    loadUnit(unitCode,page,total){
        unitApi.getById(unitCode,page, total).then(res=>{
            console.log(res);
        }).catch(error=>{
            console.log(error);
        })
    }
}