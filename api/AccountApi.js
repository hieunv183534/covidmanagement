class AccountApi extends BaseApi{
    constructor(){
        this.apiController = "accountbrowsing/";
    }

    /**
     * Lấy về danh sách tài khoản nhân viên y tế cần duyệt
     * @param {
     * index,
     * count, 
     * } body 
     * @returns 
     * +, Thành công
     * status:200
     * {
			message: "Successfully",
			data: [
			    {
                    userId,
				    phoneNumber,
                    unitCode,
                },...
            ],
		}
     * +, Thất bại
     * status: 404
     * {
            message: "No medical account to approve",
       }
     * 
     * status: 500    
     */
    getListMedical(body){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            },
            body: JSON.stringify(body),
        };

        return fetch(this.baseUrl + `${this.apiController}` + "getListMedical", options).then(res => {
            return res.json()
        });
    };

    /**
     * Lấy về danh sách tài khoản quản lý cần duyệt
     * @param {
     * index,
     * count, 
     * } body 
     * @returns 
     * +, Thành công
     * status:200
     * {
			message: "Successfully",
			data: [
			    {
                    userId,
				    phoneNumber,
                    unitCode,
                },...
            ],
		}
     * +, Thất bại
     * status: 404
     * {
            message: "No admin account to approve",
        }
     * 
     * status: 500    
     */
    getListAdmin(index,count){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            },
            body: JSON.stringify(body),
        };

        return fetch(this.baseUrl + `${this.apiController}` + "getListAdmin", options).then(res => {
            return res.json()
        });
    };

    /**
     * Duyệt tài khoản
     * @param {
     * userId, 
     * } body 
     * @returns 
     * +, Thành công
     * status:200
     * {
			message: "Successfully",
		}
     * +, Thất bại
     * status: 403
     * {
            message: "Fail",
        }
     * 
     * status: 500    
     */
    accountBrowsing(body){
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            },
            body: JSON.stringify(body),
        };

        return fetch(this.baseUrl + `${this.apiController}` + "accountbrowsing", options).then(res => {
            return res.json()
        });
    };
}