var cbbs = document.querySelectorAll('.combobox .input');
var dataList = document.querySelector('.data-list');

cbbs.forEach(element => {
    element.addEventListener('click', (e) => {
        var top = e.target.getBoundingClientRect().top + 28;
        var left = e.target.getBoundingClientRect().left;
        dataList.setAttribute('forCbbId', element.parentElement.getAttribute('id'));
        loadComboboxList(element.parentElement.getAttribute('type'), element.parentElement.getAttribute('local'), element.parentElement.getAttribute('id'));
        dataList.style.cssText = `top: ${top}px; left:${left};`;
        dataList.classList.add('data-list-show');
    });

    element.addEventListener('blur', (e) => {
        setTimeout(() => {
            dataList.classList.remove('data-list-show');
        }, 160);
    })
});

function eventForItem() {
    var items = document.querySelectorAll('.data-list .data-item');
    console.log(items);
    items.forEach(element => {
        element.addEventListener('click', () => {
            items.forEach(item => {
                item.classList.remove('item-active');
            })
            console.log(element.getAttribute('valueid') + ' - ' + element.getAttribute('valuename'));
            element.classList.add('item-active');
            document.querySelector(`#${element.parentElement.getAttribute('forCbbId')}`).querySelector('.input').value = element.getAttribute('valuename');
            document.querySelector(`#${element.parentElement.getAttribute('forCbbId')}`).setAttribute('value', element.getAttribute('valueid'));
        });
    })
};

function loadComboboxList(type, local, idCbb) {
    console.log(type + '   ' + local);
    var dataList = document.querySelector('.data-list');
    dataList.innerHTML = '';
    if (local == '1') {
        listDatas[`${type}`].forEach(element => {
            if (element.id == document.querySelector(`#${idCbb}`).getAttribute('value')) {
                dataList.append(parseHTML(`<div class="data-item item-active" valueid="${element.id}" valuename="${element.name}" >${element.name}</div>`));
            } else {
                dataList.append(parseHTML(`<div class="data-item" valueid="${element.id}" valuename="${element.name}" >${element.name}</div>`));
            }
        });
        eventForItem();
    }
};