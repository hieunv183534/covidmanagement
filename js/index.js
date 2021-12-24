
window.onload = () => {
    initEvent();
    console.log(listColums.User);
    loadTable(listColums.User, listDatas.User);
}

function initEvent() {
    document.querySelector("#btnCilivian").addEventListener('click', () => {
        window.location.href = "./page/cilivian/cilivian-home.html";
    });

    document.querySelector("#btnManager").addEventListener('click', () => {
        alert("okok");
    })

    document.querySelector("#btnMedicalStaff").addEventListener('click', () => {
        alert("okok");
    });
}

function loadTable(columns, datas){
    var thead = parseHTML('<thead></thead>');
    console.log(thead);
    columns.forEach(col => {
        var th = parseHTML(`<th style="width: ${col.width};"><p>${col.title}</p></th>`);
        thead.append(th);
    });
    document.querySelector("table").append(thead);

    var tbody = parseHTML('<tbody></tbody>');
    datas.forEach(item=>{
        var tr = parseHTML(`<tr></tr>`);
        columns.forEach(col=>{
            var td = parseHTML(`<td style="width: ${col.width};"><p>${item[`${col.field}`]}</p></td>`);
            tr.append(td);
        });
        tbody.append(tr);
        tr.addEventListener('dblclick', ()=>{
            tableRowOnDBClick(item.name);
        })
    });
    document.querySelector("table").append(tbody);
}

function tableRowOnDBClick(name){
    console.log(name);
    alert(name);
}

function parseHTML(html) {
    var t = document.createElement('template');
    t.innerHTML = html;
    return t.content.firstChild;
}
