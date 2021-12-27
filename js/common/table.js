function loadTable(columns, datas) {

    var colgroup = parseHTML('<colgroup></colgroup>');
    columns.forEach(column => {
        var col = parseHTML(`<col style="${column.width} max-width:300px;">`);
        colgroup.append(col);
    });
    document.querySelector("table").append(colgroup);


    var thead = parseHTML('<thead></thead>');
    console.log(thead);
    columns.forEach(col => {
        var th = parseHTML(`<th style="${col.style}"><p>${col.title}</p></th>`);
        thead.append(th);
    });
    document.querySelector("table").append(thead);

    var tbody = parseHTML('<tbody></tbody>');
    datas.forEach(item => {
        var tr = parseHTML(`<tr></tr>`);
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
}