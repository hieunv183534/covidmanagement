
window.onload = () => {
    initEvent();
    console.log(listColums.User);
    loadTable(listColums.User, listDatas.User);
    loadListPost(listDatas.Posts)
}

function initEvent() {
    document.querySelector("#btnCilivian").addEventListener('click', () => {
        window.location.href = "./page/cilivian/cilivian-home.html";
    });

    document.querySelector("#btnManager").addEventListener('click', () => {
        window.location.href = "./page/manager/manager-home.html";
    })

    document.querySelector("#btnMedicalStaff").addEventListener('click', () => {
        window.location.href = "./page/medicalstaff/medicalstaff-home.html";
    });
}

function loadTable(columns, datas) {
    var thead = parseHTML('<thead></thead>');
    console.log(thead);
    columns.forEach(col => {
        var th = parseHTML(`<th style="width: ${col.width};"><p>${col.title}</p></th>`);
        thead.append(th);
    });
    document.querySelector("table").append(thead);

    var tbody = parseHTML('<tbody></tbody>');
    datas.forEach(item => {
        var tr = parseHTML(`<tr></tr>`);
        columns.forEach(col => {
            var td = parseHTML(`<td style="width: ${col.width};"><p>${item[`${col.field}`]}</p></td>`);
            tr.append(td);
        });
        tbody.append(tr);
        tr.addEventListener('dblclick', () => {
            tableRowOnDBClick(item.name);
        })
    });
    document.querySelector("table").append(tbody);
}

function tableRowOnDBClick(name) {
    console.log(name);
    alert(name);
}

function parseHTML(html) {
    var t = document.createElement('template');
    t.innerHTML = html;
    return t.content.firstChild;
}

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
