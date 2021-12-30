
class listColums {

    static User = [
        {
            title : "Họ tên",
            width : "200px",
            field: 'name'
        },
        {
            title : "Ngày sinh",
            width : "150px",
            field: 'dob'
        },
        {
            title : "Địa chỉ",
            width : "250px",
            field: 'address'
        },
        {
            title : "Số điện thoại",
            width : "100px",
            field: 'phoneNumber'
        },
        {
            title : "Email",
            width : "150px",
            field: 'email'
        }
    ];

    static Unit = [
        {
            title : "Tên đơn vị",
            style : "text-align: left;",
            width: "min-width: 250px;",
            field: 'unitName'
        },
        {
            title : "Mã đơn vị",
            style : "text-align: left;",
            width: "min-width: 150px;",
            field: 'unitCode'
        },
        {
            title : "Mức báo động",
            style : "text-align: left;",
            width: "min-width: 120px;",
            field: 'warningLevel'
        },
        {
            title : "Tổng số ca nhiễm",
            style : "text-align: right;  background-color: #edd8bb33;",
            width: "min-width: 250px;",
            field: 'totalCases'
        },
        {
            title : "Tổng số ca tử vong",
            style : "text-align: right;  background-color: #f5b8b833;",
            width: "min-width: 250px;",
            field: 'totalDeaths'
        },
        {
            title : "Tổng số ca phục hồi",
            style : "text-align: right; background-color: #afebae33;",
            width: "min-width: 250px;",
            field: 'totalRecovereds'
        },
        {
            title : "Số ca nhiễm mới",
            style : "text-align: right;  background-color: #edd8bb33;",
            width: "min-width: 250px;",
            field: 'lastUpdateCases'
        },
        {
            title : "Số ca tử vong mới",
            style : "text-align: right;  background-color: #f5b8b833;",
            width: "min-width: 250px;",
            field: 'lastUpdateDeaths'
        },
        {
            title : "Số ca phục hồi mới",
            style : "text-align: right; background-color: #afebae33;",
            width: "min-width: 250px;",
            field: 'lastUpdateRecovereds'
        }
    ];

    static Account = [
        {
            title : "Số điện thoại",
            style : "text-align: left;",
            width: "min-width: 250px;",
            field: 'phoneNumber'
        },
        {
            title : "Mã đơn vị",
            style : "text-align: left;",
            width: "min-width: 250px;",
            field: 'unitCode'
        },
        {
            title : "Thông tin đơn vị",
            style : "text-align: left;",
            width: "min-width: 600px;",
            field: 'unitDetail'
        }
    ]

}