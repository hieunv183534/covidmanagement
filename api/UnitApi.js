class UnitApi extends BaseApi{
    constructor(){
        this.apiController = "unit/"
    }

    /**
     * Lay thong tin cua cac don vi con. VD truy van Ha Noi se lay duoc cac quan (khong lay xa)
     * @param {
     *  unit: unitcode cua don vi: VD: |1|1|
     * } params 
     * 
     * 
     * @param {
     *  page: trang nao dang duoc truy van - phuc vu cho phan trang
     *  total: tong so cac don vi muon duoc truy van ( mac dinh la 20 don vi)
     * } query 
     *
     * @param {
     *  keyword: tu de seach ten cac don vi
     * } body
     * 
     * @returns 
     * +, Thành công
     * status: 200 OK
     * {
     *  message: "fetching list of units successfully",
     *  data: unitList,
     * }
     * +, Thất bại
     * status: 403
     * {
     *  err
     * }
     */
    getById(body){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body: JSON.stringify(body),
        };

        return fetch(this.baseUrl + `${this.apiController}/unit-info/${unit}`, options).then(res => {
            return res.json()
        });
    }

    /**
     * Cap nhat thong tin cac don vi con. Cac don vi cha, ong se duoc tu dong cap nhap
     * @param {
     * lastUpdateCases: so ca mac moi
     * lastUpdateDeaths: so ca tu vong moi
     * lastUpdateRecovereds: so ca phuc hoi moi
     * } body
     * 
     * @param {
     * unit: unitCode cua don vi can cap nhap
     * } params
     * 
     * @returns 
     * +, Thành công
     * status: 200
     * {
     *  message: "Update successful",
     * }
     * 
     * +, Thất bại
     * status; 500
     * {
     *  err
     * }
     */


}