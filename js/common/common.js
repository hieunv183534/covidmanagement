
function parseHTML(html) {
    var t = document.createElement('template');
    t.innerHTML = html;
    return t.content.firstChild;
}



//-------------------combobox-------------------------------------------------------------------------------------------------
var cbbs = document.querySelectorAll('.combobox .input');
var dataList = document.querySelector('.data-list');

if (cbbs) {
    cbbs.forEach(element => {
        element.addEventListener('click', (e) => {
            var top = e.target.getBoundingClientRect().top + 37;
            var left = e.target.getBoundingClientRect().left;
            console.log(top + "    " + left);
            dataList.setAttribute('forCbbId', element.parentElement.getAttribute('id'));
            loadComboboxList(element.parentElement.getAttribute('type'), element.parentElement.getAttribute('local'), element.parentElement.getAttribute('id'));
            dataList.style.cssText = `left: ${left}px; top: ${top}px;`;
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

                if (document.querySelector(`#${element.parentElement.getAttribute('forCbbId')}`).getAttribute('id') == 'cbbDeclarationType') {
                    cilivianDeclaration.chooseDeclarationType(element.getAttribute('valueid'));
                }
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
}

//----------------------------------------------------------------------------------------------------------------------------

//-------------------------table-------------------------------------------------------------------------------------------
function loadTable(columns, datas, startIndex) {
    var index = startIndex;

    var colgroup = parseHTML('<colgroup></colgroup>');
    colgroup.append(parseHTML(`<col style="min-width:60px; max-width:70px;">`));
    colgroup.append(parseHTML(`<col style="min-width:50px; max-width:60px;">`));
    columns.forEach(column => {
        var col = parseHTML(`<col style="${column.width} max-width:300px;">`);
        colgroup.append(col);
    });
    document.querySelector("table").append(colgroup);


    var thead = parseHTML('<thead></thead>');
    thead.append(parseHTML(`<th style="text-align: right;">
    <div class="checkbox" value="0">
    <i class="fas fa-check"></i>
    </div>
    </th>`));
    thead.append(parseHTML(`<th style="text-align: right;"><p>STT</p></th>`));
    console.log(thead);
    columns.forEach(col => {
        var th = parseHTML(`<th style="${col.style}"><p>${col.title}</p></th>`);
        thead.append(th);
    });
    document.querySelector("table").append(thead);

    var tbody = parseHTML('<tbody></tbody>');
    datas.forEach(item => {
        var tr = parseHTML(`<tr></tr>`);
        tr.append(parseHTML(`<td style="text-align: right;">
        <div class="checkbox" value="0">
        <i class="fas fa-check"></i>
        </div>
        </td>`));
        tr.append(parseHTML(`<td style="text-align: right;"><p>${index++}</p></td>`));
        columns.forEach(col => {
            var td = parseHTML(`<td style="${col.style}"><p>${item[`${col.field}`]}</p></td>`);
            tr.append(td);
        });
        tbody.append(tr);
        tr.addEventListener('dblclick', () => {
            tableRowOnDBClick(item.name);
        })
    });
    document.querySelector("table").append(tbody);

    initEventCheckbox();
    initEventCheckboxTable();
}

function initEventCheckboxTable() {
    document.querySelector('th .checkbox').addEventListener('click', () => {
        setTimeout(()=>{
            var val = document.querySelector('th .checkbox').getAttribute('value');
            document.querySelectorAll('table tbody .checkbox').forEach(item => {
                item.setAttribute("value", val);
            });
        },100);
    })
}

//-------------------------------------------------------------------------------------------------------------------------
//-------------------------------loader-----------------------------------------------------------------------------------
var loader = document.querySelector('.loader');

if (loader) {
    document.querySelector('#btnTestLoader').addEventListener('click', (e) => {
        loader.setAttribute('isShow', 'show');
        setTimeout(() => {
            loader.setAttribute('isShow', 'hide');
        }, 10000);
    });
}

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------toastMessenger---------------------------------------------------------------------------
var toastMessenger = document.querySelector('.toast-messenger');

if (toastMessenger) {
    document.querySelector('#btnTestMesSuccess').addEventListener('click', () => {
        showToastMessenger('success', 'Cập nhật thành công!')
    });

    document.querySelector('#btnTestMesDanger').addEventListener('click', () => {
        showToastMessenger('danger', 'Cập nhật thất bại!')
    });

    function showToastMessenger(type, text) {
        toastMessenger.setAttribute('type', type);
        toastMessenger.querySelector('.mes-text').innerHTML = text;
        toastMessenger.setAttribute('isShow', 'show');
        setTimeout(() => {
            toastMessenger.setAttribute('isShow', 'hide');
        }, 4000);
    }
}

//---------------------------------------------------------------------------------------------------------------------
//-----------------------radioButton-----------------------------------------------------------------------------------
var radioButtons = document.querySelectorAll('.radio-button');

if (radioButtons) {
    radioButtons.forEach(radioButton => {
        var rbGroup = radioButton.parentElement;
        radioButton.addEventListener('click', (e) => {
            if (e.target.getAttribute('value') == '1') {
                e.target.setAttribute('value', '0');
                rbGroup.setAttribute('value', null);
            } else {
                rbGroup.querySelectorAll('.radio-button').forEach(rb => {
                    rb.setAttribute('value', '0');
                })
                e.target.setAttribute('value', '1');
                rbGroup.setAttribute('value', e.target.getAttribute('label'));
            }
        });
    });
}
//---------------------------------------------------------------------------------------------------------------------
//---------------post--------------------------------------------------------------------------------------------------
function loadListPost(posts) {
    var postList = document.querySelector(".post-list");
    posts.forEach(post => {
        var postEle = parseHTML(`<div class="post">
        <div class="post-header">
            <div class="left">
                <p class="poster">${post.poster.name}</p>
                <p class="post-time">${post.time}</p>
            </div>
            <div class="right">
                <i class="fas fa-map-marker-alt"></i>
                <div class="post-position">${post.poster.unitName}</div>
            </div>
            
        </div>
        <div class="post-body">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-content">${post.content}</p>
        </div>
    </div>`);
        postList.append(postEle);
    });
}
//---------------------------------------------------------------------------------------------------------------------
//------------------dropdown-------------------------------------------------------------------------------------------
var dropdownmain = document.querySelector('.dropdown-main');
if (dropdownmain) {
    dropdownmain.addEventListener('click', () => {
        dropdownmain.parentElement.querySelector('.dropdown-data').classList.add('dropdown-data-show');
    });

    dropdownmain.addEventListener('blur', () => {
        setTimeout(() => {
            dropdownmain.parentElement.querySelector('.dropdown-data').classList.remove('dropdown-data-show');
        }, 150);
    })
}



var dropdownItems = document.querySelectorAll('.dropdown-item');

if (dropdownItems) {
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            var dropdown = item.parentElement.parentElement;
            dropdown.querySelectorAll('.dropdown-item').forEach(ele => {
                ele.classList.remove('item-selected');
            })
            item.classList.add('item-selected');

            let valueName = item.getAttribute('valuename');

            dropdown.querySelector('.dropdown-main p').innerHTML = '';
            dropdown.querySelector('.dropdown-main p').innerHTML = valueName;
        })
    });
}
//---------------------------------------------------------------------------------------------------------------------
//--------------checkbox-----------------------------------------------------------------------------------------------

initEventCheckbox();


function initEventCheckbox() {
    var checkboxs = document.querySelectorAll('.checkbox');
    if (checkboxs) {
        checkboxs.forEach(item => {
            item.addEventListener('click', () => {
                let val = item.getAttribute('value');
                if (val == "1") val = "0"
                else val = "1"
                item.setAttribute("value", val);
            })
        })
    }

}

//---------------------------------------------------------------------------------------------------------------------