class Base {
    constructor() {
        this.initEventBase();
    }

    initEventBase() {
        var seft = this;

        // sự kiện click menu-item
        var menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', function() {
                seft.menuItemOnClick(this);
            });
        });

        // sự kiện toggle menu
        document.querySelector('.toggle-menu').addEventListener('click', function() {
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

    parseHTML(html) {
        var t = document.createElement('template');
        t.innerHTML = html;
        return t.content.firstChild;
    }
}