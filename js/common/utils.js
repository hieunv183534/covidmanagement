class Util {
    constructor(){

    }

    /**--------------------------------------------------------------------------------------
    * Hàm format ngày tháng
    * dạng ngày/tháng/năm
    * @param {any} _date
    * Author: hieunv 
    */
     static formatDate(_date) {
        if (_date != null) {
            var date = new Date(_date);
            var day = date.getDate();
            day = (day < 10) ? '0' + day : day;
            var month = date.getMonth() + 1;
            month = (month < 10) ? '0' + month : month;
            var year = date.getFullYear();
            return day + '/' + month + '/' + year;
        }
        else {
            return '';
        }
    }

    /**--------------------------------------------------------------------------------------
     * chuyển đổi ngày tháng về dang yyyy-mm-dd
     * @param {any} _date
     * Author hieunv 26/05/2021
     */
     static formatDateToValue(_date) {
        if (_date != null) {
            var date = new Date(_date);
            var day = date.getDate();
            day = (day < 10) ? '0' + day : day;
            var month = date.getMonth() + 1;
            month = (month < 10) ? '0' + month : month;
            var year = date.getFullYear();
            return year + '-' + month + '-' + day;
        }
        else {
            return '';
        }
    }

    /**--------------------------------------------------------------------------------------
     * Định dang tiền lương
     * @param {any} _salary
     * Author hieunv
     */
     static formatSalary(_salary) {
        if (_salary != null) {
            /*var salary = _salary.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.");*/
            return _salary.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            /*return salary;*/
        } else {
            return '';
        }
    }

}