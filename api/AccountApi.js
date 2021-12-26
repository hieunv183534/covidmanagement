class AccountApi extends BaseApi{
    constructor(){
        this.baseUrl = 'http://bkzalohieunv.somee.com/';
        this.apiController = "accountbrowsing/";
    }

    /**
     * 
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
                'Authorization': localStorage['token']
            },
            body:{
                index:body.index,
                count:count.count
            },
        };

        return fetch(this.baseUrl + `${this.apiController}` + "getListMedical", options).then(res => {
            return res.json()
        });
    };

        /**
     * 
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
                'Authorization': localStorage['token']
            },
            body:{
                index:body.index,
                count:count.count
            },
        };

        return fetch(this.baseUrl + `${this.apiController}` + "getListAdmin", options).then(res => {
            return res.json()
        });
    };

    /**
     * 
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
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body:{
                userId: body.userId,
            },
        };

        return fetch(this.baseUrl + `${this.apiController}` + "accountbrowsing", options).then(res => {
            return res.json()
        });
    };
}